export class CreateHotelRoomDto {
  readonly name: string;
  readonly description: string;
  readonly guests: number;
  readonly price: number;
  readonly images: string[];
  readonly amenities: string[];
}
