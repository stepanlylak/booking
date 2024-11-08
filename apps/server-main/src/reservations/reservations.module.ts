import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { Reservation, ReservationSchema } from "./reservation.schema";
import { ReservationsService } from './reservations.service';
import { ReservationsController } from "./reservations.controller";
import { SeedService } from "../seed/seed.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: Reservation.name, schema: ReservationSchema }])],
  controllers: [ReservationsController],
  providers: [ReservationsService],
  exports:[MongooseModule, ReservationsService]
})
export class ReservationsModule {}
