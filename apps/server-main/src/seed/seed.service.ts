import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from "../users/user.schema";

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async onModuleInit() {
    await this.seedUsers();
  }

  async seedUsers() {
    const existingUsers = await this.userModel.countDocuments();
    if (existingUsers === 0) {
      const newUser = new this.userModel({
        name: 'stepan',
        age: 21,
      });
      await newUser.save();
      console.log('Seeded initial user data.');
    } else {
      console.log('Database already contains data. Skipping seeding.');
    }
  }
}
