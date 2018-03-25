import { Message } from './message.d';
import { User } from './user.d';

export interface CallbackQuery {
  id: number;
  from: User;
  message?: Message;
  inline_message_id?: string;
  data: string;
}