import { Update } from '..';

export type IRouteHandler = (update: Update, params: string[]) => any;