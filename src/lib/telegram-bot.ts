import { TelegramApi } from './api/telegram-api';
import { TelegramUpdateStrategy } from './update/telegram-update-strategy';
import { TelegramRouter } from './router/telegram-router';

export class TelegramBot {
  public router: TelegramRouter = new TelegramRouter();
  public api: TelegramApi;
  
  private updater: TelegramUpdateStrategy;
  
  constructor(token: string, options? : any) {
    this.api = new TelegramApi(token);
    this.updater = new TelegramUpdateStrategy(this, options);
  }
}