import { SearchPipe } from './search.pipe';
import { User } from '../models/user.model';

describe('Pipe: SearchPipe', () => {
  let searchPipe: SearchPipe;
  let testUsers: User[];

  beforeEach(()=> {
    searchPipe = new SearchPipe();
    testUsers = [
      {
        id: '10',
        location: 'Reston',
        email: "a@a.com",
        gender: "male",
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
      },
      {
        id: "11",
        location: "Tampa",
        email: "b@b.com",
        gender: "male",
        type: "Unknown",
        name: {
          id: "1001",
          first: "Bridget",
          middle: "Erica",
          last: "Padilla"
        },
        address: {
          address1: "Fowler",
          address2: "249",
          city: "Tampa",
          state: "Florida",
          postalCode: "88080",
          country: "USA"
        }
      },
      {
        id: "12",
        location: "Tampa",
        email: "c@c.com",
        gender: "male",
        type: "Unknown",
        name: {
          id: "1002",
          first: "Mullins",
          middle: "Maude",
          last: "Wynn"
        },
        address: {
          address1: "Livingston",
          address2: "122",
          city: "Tampa",
          state: "Virginia",
          postalCode: "92287",
          country: "USA"
        }
      }
    ];
  });

  it('should create an instance of pipe', () => {
    expect(searchPipe).toBeTruthy();
  })

  it('should check for empty users list', () => {
    expect(searchPipe.transform([], 'Petty').length).toEqual(0);
  })

  it('should check if the user is in the users list', () => {
    expect(searchPipe.transform(testUsers, 'Petty').length).toEqual(1);
  })

  it('should check if the user is not in the users list', () => {
    expect(searchPipe.transform(testUsers, 'Stacked').length).toEqual(0);
  })

  it('should check the partial search using last name', () => {
    expect(searchPipe.transform(testUsers, 'Bar').length).toEqual(1);
  })

  it('should check the last name of the returned user using partial search by first name', () => {
    let returnedUser = searchPipe.transform(testUsers, 'mulli');
    expect(returnedUser[0].name.last).toEqual('Wynn');
  })

});
