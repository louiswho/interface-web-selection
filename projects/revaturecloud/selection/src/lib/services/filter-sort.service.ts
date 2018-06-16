/**
 * A service for communicating data necessary for sorting logic.
 */

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { SortParameters } from '../models/sortParameters.model';

@Injectable({
  providedIn: 'root'
})
export class FilterSortService {

  readonly defaultParams: SortParameters = {
    sortByMostVacancies: false,
  };

  subject: BehaviorSubject<SortParameters>;

  constructor() {
    this.subject = new BehaviorSubject<SortParameters>(this.defaultParams);
  }

  /**
   * Updates the SortParameters and pushes the update to all subscribers.
   *
   * @param newParams The updated set of parameters
   */
  setFilter(newParams: SortParameters): void {
    this.subject.next(newParams);
  }

  /**
   * Returns an Observable of the SortParameters.
   */
  getFilter(): Observable<SortParameters> {
    return this.subject.asObservable();
  }
}
