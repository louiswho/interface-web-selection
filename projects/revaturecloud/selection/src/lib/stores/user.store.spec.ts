import { TestBed, inject } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserStore } from './user.store';
import { SelectionService } from '../services/selection.service';
import { FilterService } from '../services/filter.service';
import { User } from '../models/user.model';
import { SearchParameters } from '../models/searchParameters.model';

class MockSelectionService {
  getAllUsers(): Observable<User[]> {
    return new BehaviorSubject<User[]>([]).asObservable();
  }
  getComplexRequestOfUsers(searchParameters: SearchParameters): Observable<any> {
    return new BehaviorSubject<any>([]).asObservable();
  }
}
class MockFilterService {
  getFilter(): Observable<SearchParameters> {
    return new BehaviorSubject<SearchParameters>( {
      batch: null,
      location: null,
      gender: null,
      batchMinimumPercentage: null,
      isCompletelyUnassigned: null,
      hasBedAvailable: null,
      assigned: null
    }).asObservable();
  }
}

describe('UserStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: SelectionService, useClass: MockSelectionService},
        {provide: FilterService, useClass: MockFilterService},
        UserStore
      ]
    });
  });

  it('should be created', inject([UserStore], (service: UserStore) => {
    expect(service).toBeTruthy();
  }));

  it('should initialize subject and filter', inject([UserStore], async (service: UserStore) => {
    service.users.subscribe((res) => {
      expect(res).toBeDefined();
    }).unsubscribe();
  }));

  it('should call from SelectionService on updateUsers', inject([UserStore, FilterService, SelectionService], (service: UserStore) => {
    let spyGetComUsers = spyOn(TestBed.get(SelectionService), 'getComplexRequestOfUsers').and.callThrough();

    service.updateUsers();

    expect(spyGetComUsers).toHaveBeenCalled();
  }));
});
