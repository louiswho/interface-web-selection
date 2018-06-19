import { PipeTransform, Pipe} from '@angular/core';
import { Room } from '../models/room.model';

@Pipe({
  name: 'roomSearch',
  pure: false
})
export class RoomSearchPipe implements PipeTransform {
  transform(value: Room[], searchString: string): Room[] {
    if (value.length === 0 || searchString === '') {
      return value;
    }
    searchString = searchString.toLowerCase();
    let foundRooms = [];
    for (let room of value) {
      searchString = searchString.toLowerCase();
      if (room.location.toLowerCase().includes(searchString)
        || room.gender.toLowerCase().includes(searchString)
        || room.address.address2.includes(searchString)
        || room.address.address1.toLowerCase().includes(searchString)
        || room.address.city.toLowerCase().includes(searchString)
        || room.address.state.toLowerCase().includes(searchString)
        || room.address.postalCode == searchString
        || room.address.country.toLowerCase().includes(searchString)) {
        foundRooms.push(room);
      }
    }
    return foundRooms;
  }
}
