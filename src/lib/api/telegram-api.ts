import { ISendMessageRequest, IGetUpdatesRequest, Message, IGetMeResponse, IGetMeResult } from './../typings';
import * as request from 'request';
import { Update } from '../typings';
import { OptionsWithUrl } from 'request';

export class TelegramApi {
  private token: string;
  private API_URL: string = 'https://api.telegram.org/bot';

  constructor(token: string) {
    this.token = token;
  }

  getMe(): Promise<IGetMeResult> {
    return this.query({ url: '/getMe', method: 'GET' }).then( ( { result }: IGetMeResponse ) => result );
  }

  getUpdates(body: IGetUpdatesRequest): Promise<Update[]> {
    return this.query({ url: '/getUpdates', method: 'POST', body })
      .then( response => response.result );
  }

  sendMessage(body: ISendMessageRequest): Promise<Message> {
    return this.query({ url: '/sendMessage', method: 'POST', body })
  }

  private query(options: OptionsWithUrl): Promise<any> {
    options.url = this.API_URL + this.token + options.url;
    Object.assign(options, { json: true });
    return new Promise((resolve, reject) => 
      request( options, (err: any, res: any, body: any) => {
        console.log('body: ',body)
        if (err) return reject(err);
        if (body.ok === false) return reject(body);
        return resolve(body);
      })
    );
  }
}