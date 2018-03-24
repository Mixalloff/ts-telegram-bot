import { PhotoSize } from "./photo-size";

export interface Sticker {
  file_id: number;
  width: number;
  height: number;
  thumb?: PhotoSize;
  file_size: number;
}