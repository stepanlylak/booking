import { Model, Types } from "mongoose";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Reservation } from "../reservations/reservation.schema";
import { CreateUserReservationDto } from "./create-user-reservation.dto";

@Injectable()
export class UserReservationsService {
  constructor(@InjectModel(Reservation.name) private reservationModel: Model<Reservation>) {}

  async create(user: Types.UUID, createUserReservationDto: CreateUserReservationDto): Promise<Reservation> {
    const createReservation = new this.reservationModel({ user, ...createUserReservationDto });
    return createReservation.save();
  }

  async findAll(user: Types.UUID): Promise<Reservation[]> {
    return this.reservationModel.find({ user })
      .populate("user")
      .populate("hotel").exec();
  }

  async findOne(id: string): Promise<Reservation> {
    return this.reservationModel.findOne({ _id: id }).exec();
  }

  async delete(user: Types.UUID, id: Types.UUID) {
    return await this.reservationModel
      .findByIdAndDelete(id)
      .exec();
  }
}
