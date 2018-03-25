import { TelegramRoute } from './telegram-route';
import { Update, IRouteHandler } from '../typings';

export class TelegramRouter {
  private routes: TelegramRoute[] = [];
  private defaultRoute: TelegramRoute;

  route(command: string, handler: IRouteHandler): this {
    this.routes.push(new TelegramRoute(command, handler));
    return this;
  }

  otherwise(handler: IRouteHandler): void {
    this.defaultRoute = new TelegramRoute(null, handler);
  }

  handle(updates: Update[]) {
    for (const update of updates) {
      switch(true) {
        case !!update.message: return this.handleMessage(update);
        case !!update.callback_query: return this.handleCallbackQuery(update);
        default: throw new Error(update.toString());
      }
    }
  }

  private handleState(chat_id: number, update: Update, command: string, params: string[]){
    const handlers = this.routes.filter( (route: TelegramRoute) => command === route.command );

    if (handlers.length) {
      handlers.forEach( (route: TelegramRoute) => route.handler(chat_id, update, params) );
    } else {
      this.defaultRoute.handler(chat_id, update, params);
    }
  }

  private handleMessage(update: Update) {
    const [ command, ...params ] = update.message.text.split(' ');

    this.handleState(update.message.chat.id, update, command, params);
  }

  private handleCallbackQuery(update: Update) {
    const [ command, ...params ] = update.callback_query.data.split(' ');

    this.handleState(update.callback_query.message.chat.id, update, command, params);
  }
}
