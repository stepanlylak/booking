import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./user.schema";
import { UsersService } from './users.service';
import { UsersController } from "./users.controller";
import { SeedService } from "../seed/seed.service";
import { ReservationsService } from "../reservations/reservations.service";
import { ReservationsModule } from "../reservations/reservations.module";
import { UserReservationsService } from "./user-reservations.service";

@Module({
  imports: [ReservationsModule, MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService, UserReservationsService],
  exports: [MongooseModule],
})
export class UsersModule {}
