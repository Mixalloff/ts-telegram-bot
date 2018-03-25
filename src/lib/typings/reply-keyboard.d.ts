import { KeyboardButton } from './keyboard-button.d';

export interface ReplyKeyboardMarkup {
  keyboard: KeyboardButton
  resize_keyboard?: boolean;
  one_time_keyboard?: boolean;
  selective?: boolean;
}

export interface ReplyKeyboardHide {
  hide_keyboard: boolean;
  selective: boolean;
}