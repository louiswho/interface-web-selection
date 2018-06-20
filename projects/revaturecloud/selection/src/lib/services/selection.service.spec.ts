import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { SelectionService } from '../../public_api';
import { User } from '../models/user.model';
import { Room } from '../models/room.model';
import { Address } from '../models/address.model';

import { mockRooms, mockUsers, mockBatches } from '../mock/data.mock';
import { Batch } from '../models/batch.model';
import { SearchParameters } from '../models/searchParameters.model';

describe('SelectionService Tests', () => {

  let selectionService: SelectionService;
  let httpTestingController: HttpTestingController;
  const filter: SearchParameters = {
    batch: null,
    location: null,
    gender: null,
    batchMinimumPercentage: null,
    isCompletelyUnassigned: null,
    hasBedAvailable: null,
    assigned: null
  };
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SelectionService]
    });

    selectionService = TestBed.get(SelectionService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should GET all rooms', () => {
    selectionService.getAllRooms()
      .subscribe((data: Room[]) => {
        expect(data.length).toBe(2);
      });

    // tslint:disable-next-line:prefer-const
    let roomsRequest: TestRequest = httpTestingController.expectOne(selectionService.rootUrl + selectionService.apiEpRooms);
    expect(roomsRequest.request.method).toEqual('GET');

    roomsRequest.flush(mockRooms);
  });

  it('should GET all users', () => {
    selectionService.getAllUsers()
      .subscribe((data: User[]) => {
        expect(data.length).toBe(4);
      });

    // tslint:disable-next-line:prefer-const
    let usersRequest: TestRequest = httpTestingController.expectOne(selectionService.rootUrl + selectionService.apiEpUsers);
    expect(usersRequest.request.method).toEqual('GET');

    usersRequest.flush(mockUsers);
  });
  it('should GET all batches', () => {
    selectionService.getAllBatches()
      .subscribe((data: Batch[]) => {
        expect(data.length).toBe(6);
      });

    // tslint:disable-next-line:prefer-const
    let batchesRequest: TestRequest = httpTestingController.expectOne(selectionService.rootUrl + selectionService.apiEpBatches);
    expect(batchesRequest.request.method).toEqual('GET');

    batchesRequest.flush(mockBatches);
  });

  // Complex request tests
  it('should GET all rooms with search params', () => {
    selectionService.getComplexRequestOfRooms(filter)
      .subscribe((data: Room[]) => {
        expect(data.length).toBe(2);
      });

    // tslint:disable-next-line:prefer-const
    let roomsRequest: TestRequest = httpTestingController.expectOne(selectionService.rootUrl + selectionService.apiEpRooms);
    expect(roomsRequest.request.method).toEqual('PUT');

    roomsRequest.flush(mockRooms);
  });

  it('should GET all users with search params', () => {
    selectionService.getComplexRequestOfUsers(filter)
      .subscribe((data: User[]) => {
        expect(data.length).toBe(4);
      });

    // tslint:disable-next-line:prefer-const
    let usersRequest: TestRequest = httpTestingController.expectOne(selectionService.rootUrl + selectionService.apiEpUsers);
    expect(usersRequest.request.method).toEqual('PUT');

    usersRequest.flush(mockUsers);
  });
});
