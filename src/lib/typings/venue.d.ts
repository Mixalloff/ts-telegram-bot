import { Location } from './location.d';
export interface Venue {
  location: Location;
  title: string;
  address: string;
  foursquare_id?: string;
}