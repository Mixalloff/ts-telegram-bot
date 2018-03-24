import { TelegramBot } from './lib/telegram-bot';

const TOKEN = '585321790:AAEVFa816Jlk-lg-4J6juSRUwrYzViV4hmo';
const bot = new TelegramBot(TOKEN);

bot.router
  .route('/start', (params: any) => console.log(params))
  .route('/list', () => console.log('list'))
  .otherwise(() => console.log('unknown route'));