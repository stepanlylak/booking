import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.schema';
import { Types } from "mongoose";
import { UserReservationsService } from "./user-reservations.service";
import { CreateUserReservationDto } from "./create-user-reservation.dto";
import { Reservation } from "../reservations/reservation.schema";

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly userReservationsService: UserReservationsService
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

  @Post(':id/reservations')
  async createReservation(@Param('id') id: Types.UUID, @Body() createReservationDto: CreateUserReservationDto){
    await this.userReservationsService.create(id, createReservationDto)
  }

  @Delete(':id/reservations/:reservationId')
  async cancelReservation(@Param('id') id: Types.UUID, @Param('reservationId') reservationId: Types.UUID, ){
    await this.userReservationsService.delete(id, reservationId)
  }

  @Get(':id/reservations')
  async findAllReservations(@Param('id') id: Types.UUID): Promise<Reservation[]>{
    return this.userReservationsService.findAll(id)
  }
}
