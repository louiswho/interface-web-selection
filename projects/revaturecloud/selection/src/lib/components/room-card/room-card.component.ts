import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../../models/room.model';
import { User } from '../../models/user.model';
import { PutService } from '../../services/put.service';

/**
 * A component for displaying individual room information.
 *
 * Provides functionality for assigning users to this room.
 *
 * Retrieves data from room wrapper via Input
 */

@Component({
  selector: 'lib-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  @Input() room: Room;
  roomPlus: Room;

  constructor(private putService: PutService) {
  }

  ngOnInit() {
    this.roomPlus = JSON.parse(JSON.stringify(this.room));
    if (!this.roomPlus.users) {
      this.roomPlus.users = [];
    }
      for (let i = 0; i < this.room.vacancy; i++) {
        this.roomPlus.users.push(
        {
          id: null,
          location: null,
          email: null,
          gender: 'fill',
          type: null,
          name: null,
          address: null
        });
    }

  }

  /**
   * Called upon clicking the minus button next to a user portrait in the room card.
   * Unassigns that user from this room.
   *
   * param user the user to be unassigned.
   */
  unassign(user: User): void {
    this.putService.unassign(user, this.room);
  }

  /**
   * Forwards the output of the User static funciton
   *
   * param user the user to check
   */
  isMale(user: User): boolean {
    return User.isMale(user);
  }
  isFemale(user: User): boolean {
    return User.isFemale(user);
  }

  /**
   * Checks if the user is a fake filler user.
   *
   * param user the user to check
   */
  isFill(user: User): boolean {
    return user.gender.toLowerCase() === 'fill';
  }
}
