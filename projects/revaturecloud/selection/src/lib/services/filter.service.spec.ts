import { TestBed, inject } from '@angular/core/testing';
import { FilterService } from './filter.service';
import { SearchParameters } from '../models/searchParameters.model';

describe('FilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterService]
    });
  });

  it('should be created', inject([FilterService], (service: FilterService) => {
    expect(service).toBeTruthy();
  }));


  it('should update on setFilter', inject([FilterService], (service: FilterService) => {
    //Arrange
    let filter: SearchParameters = {
      batch: '2',
      location: '1',
      gender: '3',
      batchMinimumPercentage: 10,
      isCompletelyUnassigned: false,
      hasBedAvailable: false,
      assigned: true
    }

    //Subscribe
    let filterActual: SearchParameters;
    service.getFilter().subscribe((f) => filterActual = f);

    //Set
    service.setFilter(filter);

    //Expect
    expect(filterActual).toBe(filter);
  }));

  it('should return default filter initially', inject([FilterService], (service: FilterService) => {
    let filterActual: SearchParameters;
    service.getFilter().subscribe((f) => filterActual = f);

    expect(filterActual).toBe(service.defaultFilter);
  }));
});
