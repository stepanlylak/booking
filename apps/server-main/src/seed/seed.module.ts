import { Module } from '@nestjs/common';
import { SeedService } from "./seed.service";
import { HotelsModule } from "../hotels/hotels.module";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [UsersModule, HotelsModule],
  providers: [SeedService],
})
export class SeedModule {}
