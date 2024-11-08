import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from "node:path";
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { MongooseModule } from "@nestjs/mongoose";
import { SeedModule } from "./seed/seed.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../client-main/dist')
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/booking'),
    SeedModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
