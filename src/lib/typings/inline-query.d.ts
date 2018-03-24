import { Location } from './location.d';
import { User } from './user.d';
export interface InlineQuery {
  id: number;
  from: User;
  location?: Location;
  query: string;
  offset: string;
}