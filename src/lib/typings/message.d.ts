import { User } from "./user";
import { Chat } from "./chat";
import { Audio } from "./audio";
import { Document } from './document';
import { PhotoSize } from "./photo-size";
import { Sticker } from "./sticker";
import { Video } from "./video";
import { Voice } from "./voice";
import { Contact } from "./contact";
import { Venue } from "./venue";

export interface Message {
  message_id: number;
  from?: User;
  date: number;
  chat: Chat;
  forward_from?: User;
  forward_date?: number;
  reply_to_message?: Message;
  text?: string;
  entities?: MessageEntity[];
  audio?: Audio;
  document?: Document;
  photo?: PhotoSize[];
  sticker?: Sticker;
  video?: Video;
  voice?: Voice;
  caption?: string;
  contact?: Contact;
  location?: Location;
  venue?: Venue;
  new_chat_member?: User;
  left_chat_member?: User;
  new_chat_title?: string;
  new_chat_photo?: PhotoSize[];
  delete_chat_photo?: true;
  group_chat_created?: true;
  supergroup_chat_created?: true;
  channel_chat_created?: true;
  migrate_to_chat_id?: number;
  migrate_from_chat_id?: number;
  pinned_message?: Message;
}

export interface MessageEntity {
  type: string;
  offset: number;
  length: number;
  url?: string;
}