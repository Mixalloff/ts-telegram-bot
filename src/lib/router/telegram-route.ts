import { IRouteHandler, Message } from '../typings';

export class TelegramRoute {
  readonly command: string;
  readonly handler: IRouteHandler;

  constructor(command: string, handler: IRouteHandler) {
    this.command = command;
    this.handler = handler;
  }
}