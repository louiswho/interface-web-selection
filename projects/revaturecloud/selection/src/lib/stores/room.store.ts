/**
 * A service for interacting with the room data.
 *
 * Encapsulates the SelectionService for component use.
 */

import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { BehaviorSubject } from 'rxjs';
import { SelectionService } from '../services/selection.service';
import { SearchParameters } from '../models/searchParameters.model';
import { FilterService } from '../services/filter.service';

@Injectable({
  providedIn: 'root'
})
export class RoomStore {

  private _roomSubject: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>([]);
  private _filter: SearchParameters;


  constructor(
    private backendService: SelectionService,
    private filterService: FilterService
  ) {
    this.loadInitData();
  }

  /**
   * Sets up the subscription connection with selectionService.
   */
  private loadInitData() {
    // Subscribes to the SelectionService
    this.backendService.getAllRooms()
      .pipe(

      )
      .subscribe(
        res => this._roomSubject.next(res)
      );

    this.filterService.getFilter()
      .subscribe(
        res => {
          this._filter = res;
        }
      );
  }

  /**
   * Returns an observable for the room data
   */
  get rooms() {
    return this._roomSubject.asObservable();
  }

  /**
   * Uses filter to get complex request of Rooms from back end service, the result set of which
   * is subscribed to and parsed into the private feild for this store that
   * then updates the data to the respective subscribers.
   *
   * @memberof RoomStore
   */
  updateRooms() {
    this.backendService.getComplexRequestOfRooms(this._filter)
      .subscribe(
        (res) => this._roomSubject.next(res),
        (err: any) => { console.log(err); }
      );
  }

}
