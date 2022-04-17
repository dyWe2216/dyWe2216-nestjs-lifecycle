import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('#14. Service layer');
    return 'Hello World!';
  }
}
