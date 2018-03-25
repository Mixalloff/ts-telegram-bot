import { Update } from '..';

export type IRouteHandler = (chat_id: number, update: Update, params: string[]) => any;