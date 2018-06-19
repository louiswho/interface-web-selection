/**
 * A service for interacting with the room data.
 *
 * Encapsulates the SelectionService for component use.
 */

import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectionService } from '../services/selection.service';
import { SearchParameters } from '../models/searchParameters.model';
import { SortParameters } from '../models/sortParameters.model';
import { FilterService } from '../services/filter.service';
import { FilterSortService } from '../services/filter-sort.service';

@Injectable({
  providedIn: 'root'
})
export class RoomStore {

  private _roomSubject: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>([]);
  private _filter: SearchParameters;
  private _sortFilter: SortParameters;

  constructor(
    private backendService: SelectionService,
    private filterService: FilterService,
    private filterSortService: FilterSortService
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

    this.filterSortService.getFilter()
      .subscribe(
        res => {
          this._sortFilter = res;
        }
      );
  }

  /**
   * Sorts the given room list by most vacancies.
   */
  private sort(users: Room[]): Room[] {
    if (this._sortFilter) {
      if (this._sortFilter.sortByMostVacancies) {
        return users.sort(
          (a, b) => {
            return b.vacancy - a.vacancy;
          }
        );
      }
    }
    return users;
  }

  /**
   * Returns an observable for the room data
   */
  get rooms(): Observable<Room[]> {
    return this._roomSubject.asObservable();
  }

  /**
   * Returns the current list of Rooms
   */
  get roomsValue(): Room[] {
    return this._roomSubject.value;
  }

  /**
   * Uses filter to get complex request of Rooms from back end service, the result set of which
   * is subscribed to and parsed into the private feild for this store that
   * then updates the data to the respective subscribers.
   *
   * @memberof RoomStore
   */
  updateRooms(): void {
    this.backendService.getComplexRequestOfRooms(this._filter)
      .subscribe(
        (res) => this._roomSubject.next(this.sort(res)),
        (err: any) => { console.log(err); }
      );
  }
}
