import { ForceReply } from './force-reply.d';
import { ReplyKeyboardMarkup, ReplyKeyboardHide } from './reply-keyboard.d';
import { InlineKeyboardMarkup } from './inline-keyboard.d';

export interface IGetMeResponse {
  ok: true;
  result: IGetMeResult;
}

export interface IGetMeResult {
  id: number;
  is_bot: boolean;
  first_name: string;
  username: string;
}

export interface IGetUpdatesRequest {
  timeout: number;
  offset?: number;
  limit?: number;
}

export interface ISendMessageRequest {
  chat_id: number | string;
  text: string;
  parse_mode?: 'Markdown' | 'HTML';
  disable_web_page_preview?: boolean;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardHide | ForceReply;
}

