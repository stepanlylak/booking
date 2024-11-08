import { Module } from '@nestjs/common';
import { SeedService } from "./seed.service";
import { HotelsModule } from "../hotels/hotels.module";
import { UsersModule } from "../users/users.module";
import { ReservationsModule } from "../reservations/reservations.module";

@Module({
  imports: [UsersModule, HotelsModule, ReservationsModule],
  providers: [SeedService],
})
export class SeedModule {}
