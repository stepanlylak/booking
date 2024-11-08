import { Room } from "./room.schema";

export class CreateHotelDto {
  readonly name: string;
  readonly description: string;
  readonly country: string;
  readonly city: string;
  readonly address: string;
  readonly postalCode: string;
  readonly phone: string;
  readonly email: string;
  readonly website: string;
  readonly images: string[];
  readonly rooms: Room[];
}
