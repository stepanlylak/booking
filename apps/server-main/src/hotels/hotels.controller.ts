import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { CreateHotelDto } from './create-hotel.dto';
import { Hotel } from './hotel.schema';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Post()
  async create(@Body() createHotelDto: CreateHotelDto) {
    await this.hotelsService.create(createHotelDto);
  }

  @Get()
  async findAll(): Promise<Hotel[]> {
    return this.hotelsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Hotel> {
    return this.hotelsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.hotelsService.delete(id);
  }
}
