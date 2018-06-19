import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Batch } from '../models/batch.model';
import { SearchParameters } from '../models/searchParameters.model';
import { SelectionService } from '../services/selection.service';
import { FilterService } from '../services/filter.service';

/**
 * A store for keeping up-to-date batch information from the selection API.
 * 
 * Encapsulates the SelectionService for component use.
 */

@Injectable({
  providedIn: 'root'
})
export class BatchStore {

  private _batchSubject: BehaviorSubject<Batch[]> = new BehaviorSubject<Batch[]>([]);
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
    this.backendService.getAllBatches()
      .pipe(

      )
      .subscribe(
        res => this._batchSubject.next(res)
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
   * Returns the subscription.
   */
  get batches(): Observable<Batch[]> {
    return this._batchSubject.asObservable();
  }

  /**
   * Uses filter to get a complex request of Batches from back end service,
   * the result set of which is subscribed to and parsed into the private
   * feild for this store and then updates the data to the respective subscribers.
   *
   * @memberof BatchStore
   */
  updateBatches(): void {
    this.backendService.getComplexRequestOfBatches(this._filter)
      .subscribe(
        (res) => {
          this._batchSubject.next(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
  }
}
