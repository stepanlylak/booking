import { Types } from "mongoose";

export class CreateUserReservationDto {
  readonly hotel: Types.ObjectId;
  readonly room: Types.ObjectId;
  readonly comment: string;
}
