import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Hotel } from "./hotel.schema";
import { CreateHotelDto } from "./create-hotel.dto";

@Injectable()
export class HotelsService {
  constructor(@InjectModel(Hotel.name) private hotelModel: Model<Hotel>) {}

  async create(createHotelDto: CreateHotelDto): Promise<Hotel> {
    const createHotel = new this.hotelModel(createHotelDto);
    return createHotel.save();
  }

  async findAll(): Promise<Hotel[]> {
    return this.hotelModel.find().exec();
  }

  async findOne(id: string): Promise<Hotel> {
    return this.hotelModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    return await this.hotelModel
      .findByIdAndDelete(id)
      .exec();
  }
}
