import { ForceReply } from './force-reply.d';
import { ReplyKeyboardMarkup, ReplyKeyboardHide } from './reply-keyboard.d';
import { InlineKeyboardMarkup } from './inline-keyboard.d';

export interface IGetUpdatesRequest {
  timeout: number;
  offset?: number;
  limit?: number;
}

export interface ISendMessageRequest {
  chat_id: number | string;
  text: string;
  parse_mode?: string;
  disable_web_page_preview?: boolean;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardHide | ForceReply;
}

