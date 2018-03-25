import { TelegramBot } from './lib/telegram-bot';
import { Update, InlineKeyboardButton, InlineKeyboardMarkup, IRouteHandler, ReplyKeyboardMarkup, KeyboardButton } from './lib/typings';

const TOKEN = '585321790:AAEVFa816Jlk-lg-4J6juSRUwrYzViV4hmo';
const bot = new TelegramBot(TOKEN);

bot.router
  .route('/start', (params: any) => console.log(params))
  .route('/inline', asdController )
  .route('/keyboard', btnsController)
  .route('/me', meController )
  .route('/lang', languageController)
  .otherwise(otherwiseRouteController);


// TODO: replace controllers to another files
function btnsController(chat_id: number, update: Update) {
  const reply_markup: ReplyKeyboardMarkup = {
    keyboard: [
      [ { text: '/inline' }, { text: '/me' } ],
      [ { text: '/lang ru' } ]
    ]
  };
  const text = 'test';

  bot.api.sendMessage({ text, chat_id, reply_markup })   
}
function asdController(chat_id: number, update: Update) {
  const text = `
    <strong>Привет!</strong>\n<i>Выберите язык</i>
  `;
  const reply_markup: InlineKeyboardMarkup = {
    inline_keyboard: [
      [ { text: 'Русский', callback_data: '/lang ru' }, { text: 'English', callback_data: '/lang en' }]
    ]
  };
  const parse_mode = 'HTML';

  bot.api.sendMessage({ text, chat_id, parse_mode, reply_markup }) 
}

function meController(chat_id: number, update: Update) {
  bot.api.getMe()
    .then(  () => bot.api.getMe())
    .then( me => bot.api.sendMessage({ text: `Меня зовут ${ me.first_name } (@${ me.username })`, chat_id }) );
}

function otherwiseRouteController(chat_id: number, update: Update) {
  return bot.api.sendMessage({ text: `Я не понимаю, что значит: '${ update.message.text }'`, chat_id: update.message.chat.id }) 
}

function languageController(chat_id: number, update: Update, params: string[]) {
  const [ lang ] = params;
  let reply_markup: InlineKeyboardMarkup;
  let text;

  switch(lang) {
    case 'ru': text = 'Вы выбрали русский язык'; break;
    case 'en': text = 'Вы выбрали английский язык'; break;
    default:
      text = 'Некорректный выбор языка';
      reply_markup = {
        inline_keyboard: [
          [ { text: 'Русский', callback_data: '/lang ru' }, { text: 'English', callback_data: '/lang en' }]
        ]
      };
  }
  bot.api.sendMessage({ text, chat_id, reply_markup });
  return 1;
}