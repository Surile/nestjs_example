import { Injectable } from '@nestjs/common';
import Axios, { AxiosInstance } from 'axios';

@Injectable()
export class AppService {
  private readonly client: AxiosInstance;

  constructor() {
    this.client = Axios.create({
      baseURL: 'http://119.3.108.116/api',
    });
  }

  getHello(): string {
    return 'Hello World!';
  }

  getAllType(): Promise<any> {
    return this.client.get('/type');
  }
}
