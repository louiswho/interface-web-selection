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

  constructor(
    private putService: PutService,
    private roomStoreService: RoomStore
  ) {}

  ngOnInit() {}

  /**
   * Adds this user to the first available room.
   */
  addToFirstAvailable() {
    this.roomStoreService.rooms.subscribe((res) => {
      let room: Room = res.find((value) => {
        if (value.vacancy) {
          return value.vacancy > 0;
        } else {
          return false
        }
      });

      this.putService.assign(this.user, room);
    });
  }
}
