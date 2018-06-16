import { Component, OnInit, OnDestroy} from '@angular/core';
import { Room } from '../../models/room.model';
import { PageEvent } from '@angular/material';
import { RoomStore } from '../../stores/room.store';

/**
 * wrapper for displaying room cards with users or unassigned rooms
 * retrieves data from roomstore and sends corresponding data to room card
 */

@Component({
  selector: 'lib-room-card-wrapper',
  templateUrl: './room-wrapper.component.html',
  styleUrls: ['./room-wrapper.component.css']
})
export class RoomWrapperComponent implements OnInit, OnDestroy {

  rooms: Room[];
  searchRooms = '';
  pageEvent: PageEvent;
  pageOptions = [4, 8, 12];
  p: number = 1;

  constructor(private roomStore: RoomStore) {
  }

  ngOnInit() {
    this.roomStore.rooms
      .subscribe((rooms: Room[]) => {
        this.rooms = rooms;
      });
  }

  ngOnDestroy() {
  }
}
