import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../users/user.schema";
import { UserRole } from "../enum/UserRole.enum";
import { Hotel } from "../hotels/hotel.schema";
import genHotels from "./genHotels";

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Hotel.name) private hotelModel: Model<Hotel>
  ) {}

  async onModuleInit() {
    await this.seedUsers();
    await this.seedHotels();
  }

  async seedUsers() {
    const existingUsers = await this.userModel.countDocuments();
    if (existingUsers === 0) {
      await this.userModel.insertMany([
        {
          name: "user.admin",
          role: UserRole.Admin
        },
        {
          name: "user.host",
          role: UserRole.Host
        },
        {
          name: "user.guest",
          role: UserRole.Guest
        }
      ]);
      console.log("Seeded initial users.");
    } else {
      console.log("Database already contains users. Skipping seeding.");
    }
  }

  async seedHotels() {
    const existingHotels = await this.hotelModel.countDocuments();
    if (existingHotels === 0) {
      await this.hotelModel.insertMany(genHotels(10));
      console.log("Seeded initial hotels.");
    } else {
      console.log("Database already contains hotels. Skipping seeding.");
    }
  }
}
