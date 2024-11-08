import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './create-reservation.dto';
import { Reservation } from './reservation.schema';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  async create(@Body() createReservationDto: CreateReservationDto) {
    await this.reservationsService.create(createReservationDto);
  }

  @Get()
  async findAll(): Promise<Reservation[]> {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Reservation> {
    return this.reservationsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.reservationsService.delete(id);
  }
}
