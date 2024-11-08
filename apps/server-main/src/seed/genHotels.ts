import { Hotel } from "../hotels/hotel.schema";
import { Room } from "../hotels/room.schema";
import { map } from 'lodash';
import { faker } from '@faker-js/faker';

export default function genHotels(count: number = 10): Hotel[] {
  return map(Array(count), function() {
    return genHotel();
  });
}

function genHotel(): Hotel {
  const rooms: Room[] = map(Array(faker.number.int({ min: 2, max: 5 })), function() {
    return genRoom();
  });

  const images: string[] = map(Array(faker.number.int({ min: 4, max: 6 })), function() {
    return faker.image.url();
  });

  return {
    name: faker.company.name() + " Hotel",
    description: faker.lorem.paragraph(),
    country: faker.location.country(),
    city: faker.location.city(),
    address: faker.location.streetAddress(),
    postalCode: faker.location.zipCode(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    images: images,
    rooms: rooms
  };
}

function genRoom(): Room {
  const images: string[] = map(Array(faker.number.int({ min: 3, max: 6 })), function() {
    return faker.image.url();
  });

  return {
    name: faker.lorem.word() + " Room",
    description: faker.lorem.sentence(),
    guests: faker.number.int({ min: 1, max: 4 }),
    price: faker.number.int({ min: 50, max: 500 }),
    images: images,
    amenities: [faker.lorem.word(), faker.lorem.word()]
  };
}
