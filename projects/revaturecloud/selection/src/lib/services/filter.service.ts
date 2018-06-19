/**
 * A service for communicating data necessary for filtering API calls.
 */

import { Injectable } from '@angular/core';
import { SearchParameters } from '../models/searchParameters.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  readonly defaultFilter: SearchParameters = {
    batch: null,
    location: null,
    gender: null,
    batchMinimumPercentage: 0,
    isCompletelyUnassigned: false,
    hasBedAvailable: false,
    assigned: false,
  };

  subject: BehaviorSubject<SearchParameters>;

  constructor() {
    this.subject = new BehaviorSubject<SearchParameters>(this.defaultFilter);
  }

  /**
   * Updates the SearchParameters and pushes the update to all subscribers
   *
   * param filter The updated set of parameters
   */
  setFilter(filter: SearchParameters) {
    this.subject.next(filter);
  }

  /**
   * Returns an Observable of the SearchParameters.
   */
  getFilter(): Observable<SearchParameters> {
    return this.subject.asObservable();
  }
}
