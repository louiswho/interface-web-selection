import { RoomSearchPipe } from './roomsearch.pipe';
import { Room } from '../models/room.model';

describe('Pipe: RoomSearchPipe', () => {
  let roomsearchPipe: RoomSearchPipe;
  let testRooms: Room[];

  beforeEach(()=> {
    roomsearchPipe = new RoomSearchPipe();

    testRooms = [
      {
        id: '1',
        location: 'Reston',
        vacancy: 3,
        occupancy: 1,
        gender: 'female',
        address: {
          address1: "Fowler",
          address2: "411",
          city: "Reston",
          state: "Virginia",
          postalCode: "43417",
          country: "USA"
        },
        users: [
          {
            id: '10',
            location: 'Reston',
            email: "a@a.com",
            gender: "female",
            type: "Known",
            name: {
              id: "1000",
              first: "Petty",
              middle: "Meagan",
              last: "Barber"
            },
            address: {
              address1: "Fowler",
              address2: "411",
              city: "Reston",
              state: "Virginia",
              postalCode: "43417",
              country: "USA"
            }
          }
        ]
      }
    ];

  });

  it('should create an instance of pipe', () => {
    expect(roomsearchPipe).toBeTruthy();
  })

  it('should check for empty users list', () => {
    expect(roomsearchPipe.transform([], 'Petty').length).toEqual(0);
  })

  it('should check if the room is in the rooms list by location', () => {
    expect(roomsearchPipe.transform(testRooms, 'Reston').length).toEqual(1);
  })

  it('should check if the room is not in the rooms list by location', () => {
    expect(roomsearchPipe.transform(testRooms, 'Denver').length).toEqual(0);
  })

  it('should check the partial search using location', () => {
    expect(roomsearchPipe.transform(testRooms, 'Res').length).toEqual(1);
  })

  it('should check the location of the returned room by postal code', () => {
    let returnedRooms = roomsearchPipe.transform(testRooms, '43417');
    expect(returnedRooms[0].location).toEqual('Reston');
  })

});
