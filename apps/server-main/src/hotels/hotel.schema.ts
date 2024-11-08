import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from "mongoose";
import { Room, RoomSchema } from "./room.schema";

@Schema()
export class Hotel {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  country: string;

  @Prop()
  city: string;

  @Prop()
  address: string;

  @Prop()
  postalCode: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  website: string;

  @Prop()
  images: string[];

  @Prop([RoomSchema])
  rooms: Room[]
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);

export type HotelDocumentOverride = {
  rooms: Types.DocumentArray<Room>;
};

export type HotelDocument = HydratedDocument<Hotel, HotelDocumentOverride>;
