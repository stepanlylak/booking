import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { Hotel, HotelSchema } from "./hotel.schema";
import { HotelsService } from './hotels.service';
import { HotelsController } from "./hotels.controller";
import { SeedService } from "../seed/seed.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: Hotel.name, schema: HotelSchema }])],
  controllers: [HotelsController],
  providers: [HotelsService],
  exports:[MongooseModule]
})
export class HotelsModule {}
