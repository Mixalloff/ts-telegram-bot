export class TelegramRoute {
  readonly command: string;
  readonly handler: Function;

  constructor(command: string, handler: Function) {
    this.command = command;
    this.handler = handler;
  }
}