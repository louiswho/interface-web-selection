import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { SelectionService } from '../../public_api';
import { User } from '../models/user.model';
import { Room } from '../models/room.model';
import { Address } from '../models/address.model';

describe('SelectionService Tests', () => {

  let selectionService: SelectionService;
  let httpTestingController: HttpTestingController;
  // tslint:disable-next-line:prefer-const
  let testAddress1: Address = {
    address1: 'Street',
    address2: '314',
    city: 'Tampa',
    state: 'FL',
    postalCode: '33612',
    country: 'USA'
  };
  // tslint:disable-next-line:prefer-const
  let testAddress2: Address = {
    address1: 'Street',
    address2: '315',
    city: 'Tampa',
    state: 'FL',
    postalCode: '33612',
    country: 'USA'
  };
  // tslint:disable-next-line:prefer-const
  let testRooms: Room[] = [
    {
      roomId: 'guid1',
      location: 'Tampa',
      vacancy: 4,
      occupancy: 4,
      gender: 'm',
      address: testAddress1,
    },
    {
      roomId: 'guid2',
      location: 'Tampa',
      vacancy: 1,
      occupancy: 4,
      gender: 'f',
      address: testAddress2,
    }
  ];
  // tslint:disable-next-line:prefer-const
  let testUsers: User[] = [
    {
      id: '1',
      location: 'Here',
      address: {
        address1: 'Angular Main Rd',
        address2: '3',
        city: 'Tampa',
        state: 'Florida',
        postalCode: '98798',
        country: 'USA'
      },
      email: 'email@gmail.com',
      name: {
        id: '1',
        first: 'You',
        middle: 'o',
        last: 'Kot',
      },
      gender: 'F',
      type: 'Unknown',
      batch: null,
      room: testRooms[0]
    },
    {
      id: '2',
      location: 'There',
      address: {
        address1: 'C# Main Rd',
        address2: '31',
        city: 'Tampa',
        state: 'Florida',
        postalCode: '98798',
        country: 'USA'
      },
      email: 'email@yahoo.com',
      name: {
        id: '2',
        first: 'Me',
        middle: 'o',
        last: 'Ko',
      },
      gender: 'M',
      type: 'Known',
      batch: null,
      room: testRooms[1]
    },
    {
      id: '3',
      location: 'Nowhere',
      address: {
        address1: 'Dotnet Main St',
        address2: '314',
        city: 'Tampa',
        state: 'Florida',
        postalCode: '98790',
        country: 'USA'
      },
      email: 'email@revature.com',
      name: {
        id: '3',
        first: 'Who',
        middle: 'o',
        last: 'K',
      },
      gender: 'F',
      type: 'Unknown',
      batch: null,
      room: testRooms[0]
    }
  ]
;
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

    roomsRequest.flush(testRooms);
  });

  it('should GET all users', () => {
    selectionService.getAllUsers()
      .subscribe((data: User[]) => {
        expect(data.length).toBe(3);
      });

    // tslint:disable-next-line:prefer-const
    let usersRequest: TestRequest = httpTestingController.expectOne(selectionService.rootUrl + selectionService.apiEpUsers);
    expect(usersRequest.request.method).toEqual('GET');

    usersRequest.flush(testUsers);
  });

  it('should GET all users', () => {
    selectionService.getAllUnassignedUsers()
      .subscribe((data: User[]) => {
        expect(data.length).toBe(3);
      });

    // tslint:disable-next-line:prefer-const
    let usersRequest: TestRequest = httpTestingController.expectOne(selectionService.rootUrl + selectionService.apiEpUnassignedUsers);
    expect(usersRequest.request.method).toEqual('GET');

    usersRequest.flush(testUsers);
  });
});
