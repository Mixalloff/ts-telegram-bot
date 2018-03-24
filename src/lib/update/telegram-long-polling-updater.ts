import { Update } from './../typings';
import { TelegramBot } from '../telegram-bot';
import { ITelegramUpdater } from './updater';

export class TelegramLongPollingUpdater implements ITelegramUpdater {
  private TIMEOUT = 30;
  private offset: number;

  constructor(private bot: TelegramBot) {
    this.update();
  }

  update() {
    this.bot.api.getUpdates({ timeout: this.TIMEOUT, offset: this.offset })
      .then( (updates: Update[] ) => {
        if (updates.length) this.bot.router.handle(updates);
        this.offset = updates.length > 0 ? +updates.pop().update_id + 1 : this.offset;
        this.update();
      });
  }
}