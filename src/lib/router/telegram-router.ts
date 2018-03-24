import { TelegramRoute } from './telegram-route';
import { Update } from '../typings';

export class TelegramRouter {
  private routes: TelegramRoute[] = [];
  private defaultRoute: TelegramRoute;

  route(command: string, handler: Function): this {
    this.routes.push(new TelegramRoute(command, handler));
    return this;
  }

  otherwise(handler: Function): void {
    this.defaultRoute = new TelegramRoute(null, handler);
  }

  handle(updates: Update[]) {
    for (const update of updates) {
      const [ command, ...params ] = update.message.text.split(' ');
      const handlers = this.routes.filter( (route: TelegramRoute) => command === route.command );
      if (handlers.length) {
        handlers.forEach( (route: TelegramRoute) => route.handler(params) );
      } else {
        this.defaultRoute.handler(params);
      }
    }
  }
}