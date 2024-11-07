import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./user.schema";
import { UsersService } from './users.service';
import { UsersController } from "./users.controller";
import { SeedService } from "../seed/seed.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService, UsersService, SeedService],
})
export class UsersModule {}
