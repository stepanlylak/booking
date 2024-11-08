import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RoomDocument = HydratedDocument<Room>;

@Schema()
export class Room {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  guests: number;

  @Prop()
  price: number;

  @Prop()
  images: string[];

  @Prop()
  amenities: string[];
}

export const RoomSchema = SchemaFactory.createForClass(Room);
