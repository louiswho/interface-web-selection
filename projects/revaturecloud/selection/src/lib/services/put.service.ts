/**
 * A service to handle making put requests to the API.
 * Also listens for successful requests and
 * informs the changes store on success.
 */

import { Injectable } from '@angular/core';
import { SelectionService } from './selection.service';

import { User } from '../models/user.model';
import { Room } from '../models/room.model';
import { ChangeStore } from '../stores/change.store';
import { UserStore } from '../stores/user.store';
import { RoomStore } from '../stores/room.store';

@Injectable({
  providedIn: 'root'
})
export class PutService {

  constructor(
    private service: SelectionService,
    private store: ChangeStore,
    private uStore: UserStore,
    private rStore: RoomStore) { }

  /**
   * Assigns the given user to the given room by
   * making a call to the SelectionService.
   *
   * On successful response, updates the changes,
   * user, and room stores.
   *
   * @param user The user to be assigned
   * @param room The room the user is being assigned to
   */
  assign(user: User, room: Room): void {

    this.service.addUserToRoom(
      {userId: user.id, roomId: room.roomId}
    ).subscribe((res) => {
      this.store.addUserToRoom(user, room);
      this.uStore.updateUsers();
      this.rStore.updateRooms();
    });
  }

  /**
   * Unassigns the given user from the given room by
   * making a call to the SelectionService.
   *
   * On successful response, updates the changes,
   * user, and rooms stores.
   *
   * @param user the user to be unassigned
   * @param room the room the user is being unassigned from
   */
  unassign(user: User, room: Room): void {
    this.service.removeUserFromRoom(
      {userId: user.id, roomId: room.roomId}
    ).subscribe((res) => {
      this.store.removeUserFromRoom(user, room);
      this.uStore.updateUsers();
      this.rStore.updateRooms();
    });
  }
}
