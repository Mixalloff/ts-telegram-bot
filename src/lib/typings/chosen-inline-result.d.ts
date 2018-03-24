import { User } from "./user";
import { Location } from './location';

export interface ChosenInlineResult {
  result_id: number;
  from: User;
  location?: Location;
  inline_message_id?: string;
  query: string;
}