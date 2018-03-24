import { PhotoSize } from "./photo-size";

export interface Document {
  file_id: number;
  thumb?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
}