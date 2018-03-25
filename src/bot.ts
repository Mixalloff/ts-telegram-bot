import { TelegramBot } from './lib/telegram-bot';
import { Update } from './lib/typings';

const TOKEN = '585321790:AAEVFa816Jlk-lg-4J6juSRUwrYzViV4hmo';
const bot = new TelegramBot(TOKEN);

bot.router
  .route('/start', (params: any) => console.log(params))
  .route('/list', () => console.log('list'))
  .route('asd', (update: Update) => bot.api.sendMessage({ text: '123123', chat_id: update.message.chat.id }) )
  .otherwise(() => console.log('unknown route'));