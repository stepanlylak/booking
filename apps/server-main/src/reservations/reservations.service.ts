import { Model, Types } from "mongoose";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Reservation } from "./reservation.schema";
import { CreateReservationDto } from "./create-reservation.dto";

@Injectable()
export class ReservationsService {
  constructor(@InjectModel(Reservation.name) private reservationModel: Model<Reservation>) {}

  async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
    const createReservation = new this.reservationModel(createReservationDto);
    return createReservation.save();
  }

  async findAll(): Promise<Reservation[]> {
    return this.reservationModel.find().exec();
  }

  async findOne(id: string): Promise<Reservation> {
    return this.reservationModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    return await this.reservationModel
      .findByIdAndDelete(id)
      .exec();
  }
}
