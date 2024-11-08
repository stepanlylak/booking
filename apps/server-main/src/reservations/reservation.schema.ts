import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from "mongoose";
import { User } from "../users/user.schema";
import { Hotel } from "../hotels/hotel.schema";

export type ReservationDocument = HydratedDocument<Reservation>;

@Schema()
export class Reservation {
  @Prop({type: Types.ObjectId, ref: 'User', required: true})
  user: User;

  @Prop({type: Types.ObjectId, ref: 'Hotel', required: true})
  hotel: Hotel;

  @Prop({type: Types.ObjectId, required: true})
  room: Types.ObjectId;

  @Prop()
  comment: string;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
