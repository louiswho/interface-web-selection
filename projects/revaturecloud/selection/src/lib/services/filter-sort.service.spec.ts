import { TestBed, inject } from '@angular/core/testing';
import { FilterSortService } from './filter-sort.service';
import { SortParameters } from '../models/sortParameters.model';

describe('FilterSortService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterSortService]
    });
  });

  it('should be created', inject([FilterSortService], (service: FilterSortService) => {
    expect(service).toBeTruthy();
  }));

  it('should update on setFilter', inject([FilterSortService], (service: FilterSortService) => {
    //Arrange
    let params: SortParameters = {
      sortByMostVacancies: true,
    }

    //Subscribe
    let paramsActual: SortParameters;
    service.getFilter().subscribe((p) => paramsActual = p);

    //Set
    service.setFilter(params);

    //Expect
    expect(paramsActual).toBe(params);
  }));

  it('should return default filter initially', inject([FilterSortService], (service: FilterSortService) => {
    let paramsActual: SortParameters;
    service.getFilter().subscribe((p) => paramsActual = p);

    expect(paramsActual).toBe(service.defaultParams);
  }));
});
