import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tracker } from '../models/tracker.model';
import { User } from '../models/user.model';
import { Room } from '../models/room.model';
/**
 * Store to keep track of changes for the current session.
 *
 * @export
 * @class ChangeStore
 */
@Injectable({
  providedIn: 'root'
})

export class ChangeStore {

  private _changeTracker: BehaviorSubject<Tracker[]> = new BehaviorSubject<Tracker[]>([]);
  private _changeArray: Tracker[];
  constructor() {
  }
  /**
   * Method that adds User, Room, and Action as "Add" to store, and updates
   * observable for those subscribed.
   * @param {User} user
   * @param {Room} room
   * @memberof ChangeStore
   */
  addUserToRoom(user: User, room: Room) {
    let tracker: Tracker;
    tracker.User = user;
    tracker.Room = room;
    tracker.Action = 'Add';
    this._changeArray.push(tracker);
    this._changeTracker.next(this._changeArray);
  }
  /**
   * Method that adds User, Room, and Action as "Remove" to store, and updates
   * observable for those subscribed.
   * @param {User} user
   * @param {Room} room
   * @memberof ChangeStore
   */
  removeUserFromRoom(user: User, room: Room) {
    let tracker: Tracker;
    tracker.User = user;
    tracker.Room = room;
    tracker.Action = 'Remove';
    this._changeArray.push(tracker);
    this._changeTracker.next(this._changeArray);
  }
  /**
   * Clears all changes for current session.
   *
   * @memberof ChangeStore
   */
  clearTrackedChanges() {
    this._changeArray = [];
    this._changeTracker.next(this._changeArray);
  }
  get changes$() {
    return this._changeTracker.asObservable();
  }
}
