import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { PutService } from '../../services/put.service';
import { RoomStore } from '../../stores/room.store';
import { Room } from '../../models/room.model';

/**
 * The user card component. Displays information about an individual user.
 * Provides logic for assigned the user to first available
 */

@Component({
  selector: 'lib-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;

  rooms: Room[];
  dropDownValue: Room;

  constructor(
    private putService: PutService,
    private roomStoreService: RoomStore
  ) {}

  ngOnInit() {
    this.initRooms();
  }

  /**
   * Adds this user to the first available room.
   */
  addToFirstAvailable(): void {
    let room: Room = this.roomStoreService.roomsValue.find((room) => {
      if (room.vacancy && room.gender && room.location) {
        return room.vacancy > 0 && room.gender === this.user.gender && room.location === this.user.location;
      } else {
        return false;
      }
    });
    this.putService.assign(this.user, room);
  }

  addUserToRoom(): void {
    if ( this.dropDownValue !== null ) {
    this.putService.assign(this.user, this.dropDownValue);
  } else {
    let myroom: Room = this.roomStoreService.roomsValue.find((myroom) => {
      if (myroom.address) {
        return (myroom.address.address1 === this.user.address.address1 && myroom.address.address2 === this.user.address.address2);
      } else {
        return false;
      }
    });

    this.putService.unassign(this.user, myroom);
  }

  }

  /**
   * Forwards the output of the User static function.
   */
  isMale(): boolean {
    return User.isMale(this.user);
  }
  isFemale(): boolean {
    return User.isFemale(this.user);
  }

  /**
   * Checks the user's address field to see if the user is assigned housing.
   */
  isHoused(): boolean {
    return this.user.address !== null;
  }

  initRooms(): void {
    this.roomStoreService.rooms.subscribe((res) => {
      this.rooms = res.filter((room) => room.gender === this.user.gender && room.location === this.user.location && room.vacancy > 0);
    });
  }
}
