import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectionService } from '../services/selection.service';
import { FilterService } from '../services/filter.service';
import { SearchParameters } from '../models/searchParameters.model';

/**
 * A service for interfacing with the user data.
 *
 * Encapsulates the SelectionService for component use.
 */

@Injectable({
  providedIn: 'root'
})
export class UserStore {

  private _userSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
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
  loadInitData(): void {
    // Subscribes to the SelectionService
    this.backendService.getAllUsers()
      .pipe(

      )
      .subscribe(
        res => this._userSubject.next(res)
      );

    // Subscribes to the FilterService
    this.filterService.getFilter()
      .subscribe(
        (res) => {
          this._filter = res;
        }
      );
  }

  /**
   * Returns the subscription
   */
  get users(): Observable<User[]> {
    return this._userSubject.asObservable();
  }
   /**
    * Uses filter to get complex request of Users from back end service, the result set of which
    * is subscribed to and parsed into the private feild for this store and
    * then updates the data to the respective subscribers.
    *
    * @memberof UserStore
    */
  updateUsers(): void {
    this.backendService.getComplexRequestOfUsers(this._filter)
      .subscribe(
        (res) => {
          this._userSubject.next(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
  }
}
