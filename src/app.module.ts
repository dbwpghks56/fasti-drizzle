import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Dbconfig } from './config';
import { GlobalModule } from './global/global.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [Dbconfig]
    }),
    GlobalModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
