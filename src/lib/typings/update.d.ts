import { CallbackQuery } from './callback-query.d';
import { ChosenInlineResult } from './chosen-inline-result.d';
import { Message } from "./message";
import { InlineQuery } from "./inline-query";

export interface Update {
  update_id: number;
  message?: Message;
  inline_query?: InlineQuery;
  chosen_inline_result?: ChosenInlineResult;
  callback_query?: CallbackQuery;
}