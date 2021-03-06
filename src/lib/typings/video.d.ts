import { PhotoSize } from "./photo-size";

export interface Video {
  file_id: number;
  width: number;
  height: number;
  duration: number;
  thumb?: PhotoSize;
  mime_type: string;
  file_size: number;
}