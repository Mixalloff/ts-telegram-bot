import { TelegramLongPollingUpdater } from './telegram-long-polling-updater';
import { TelegramBot } from '../telegram-bot';
import { IUpdater } from '../typings';

export class TelegramUpdateStrategy implements IUpdater {
  private updater: TelegramLongPollingUpdater;

  constructor(bot: TelegramBot, options: any = {}) {
    // TODO: Need to add webhook update handler
    if (!options.webhookUpdate) this.updater = new TelegramLongPollingUpdater(bot);
  }

  update() {
    this.updater.update();
  }
}