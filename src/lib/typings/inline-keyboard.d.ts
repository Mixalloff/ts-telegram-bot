export interface InlineKeyboardMarkup {
  inline_keyboard: InlineKeyboardButton;
}

export interface InlineKeyboardButton {
  text: string;
  url?: string;
  callback_data?: string;
  switch_inline_query?: string;
  switch_inline_query_current_chat?: string;
}