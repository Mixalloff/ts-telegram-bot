import { ISendMessageRequest, IGetUpdatesRequest, Message } from './../typings';
import * as request from 'request';
import { Update } from '../typings';

export class TelegramApi {
  private token: string;
  private API_URL: string = 'https://api.telegram.org/bot';

  constructor(token: string) {
    this.token = token;
  }

  getUpdates(body: IGetUpdatesRequest): Promise<Update[]> {
    return this.query({ url: '/getUpdates', method: 'POST', body })
      .then( response => response.result );
  }

  sendMessage(body: ISendMessageRequest): Promise<Message> {
    return this.query({ url: '/sendMessage', method: 'POST', body })
  }

  private query(options: any): Promise<any> {
    options.url = this.API_URL + this.token + options.url;
    Object.assign(options, { json: true });
    return new Promise((resolve, reject) => 
      request( options, (err: any, res: any, body: any) => err ? reject(err) : resolve(body) )
    );
  }
}