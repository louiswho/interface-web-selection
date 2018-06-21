import {
  Room
} from '../models/room.model';
import {
  User
} from '../models/user.model';
import {
  Batch
} from '../models/batch.model';

export const mockRooms: Room[] = [{
    id: '68ea548e-9972-4749-a99b-1c1614216f4d',
    location: 'Tampa',
    vacancy: 3,
    occupancy: 4,
    gender: 'M',
    address: {
      address1: '12977 N 50TH ST',
      address2: 'RM 314',
      city: 'Tampa',
      state: 'FL',
      postalCode: '33617',
      country: 'US'
    },
    users: [{
      id: '0f180ca6-4d49-4aae-aea3-0afc7c44e7bd',
      location: 'Tampa',
      email: 'first_6_last@example.com',
      gender: 'M',
      type: 'Associate',
      name: {
        id: '9eb12ef5-9b17-49e7-bdac-97ba8e459fb9',
        first: 'Timothy',
        middle: null,
        last: 'Hazel'
      },
      address: {
        address1: '12977 N 50TH ST',
        address2: 'RM 314',
        city: 'Tampa',
        state: 'FL',
        postalCode: '33617',
        country: 'US'
      }
    }]
  },
  {
    id: 'a83db2bf-6651-439d-bced-42ffacf80ac6',
    location: 'Tampa',
    vacancy: 3,
    occupancy: 4,
    gender: 'F',
    address: {
      address1: '12977 N 50TH ST',
      address2: 'RM 316',
      city: 'Tampa',
      state: 'FL',
      postalCode: '33617',
      country: 'US'
    },
    users: [{
        id: '205293fd-00ac-439b-9d00-823d260093a8',
        location: 'Tampa',
        email: 'first_5_last@example.com',
        gender: 'F',
        type: 'Associate',
        name: {
          id: '9f796873-4933-4a03-8aa6-dd672f9f01f3',
          first: 'Jill',
          middle: null,
          last: 'Pringle'
        },
        address: {
          address1: '12977 N 50TH ST',
          address2: 'RM 316',
          city: 'Tampa',
          state: 'FL',
          postalCode: '33617',
          country: 'US'
        }
      }

    ]
  },
];


export const mockUsers: User[] = [{
    id: '0f180ca6-4d49-4aae-aea3-0afc7c44e7bd',
    location: 'Tampa',
    email: 'first_6_last @example.com',
    gender: 'M',
    type: 'Associate',
    name: {
      id: '9eb12ef5-9b17-49e7-bdac-97ba8e459fb9',
      first: 'Timothy',
      middle: null,
      last: 'Hazel'
    },
    address: {
      address1: '12977 N 50TH ST',
      address2: 'RM 314',
      city: 'Tampa',
      state: 'FL',
      postalCode: '33617',
      country: 'US'
    }
  },
  {
    id: '280c0ee9-2578-4124-913c-28c7667b32cf',
    location: 'Tampa',
    email: 'first_2_last @example.com',
    gender: 'M',
    type: 'Associate',
    name: {
      id: '53a907be-6c03-4212-a8a7-61e8f7c55ff5',
      first: 'John',
      middle: null,
      last: 'Doe'
    },
    address: {
      address1: '12977 N 50TH ST',
      address2: 'RM 319',
      city: 'Tampa',
      state: 'FL',
      postalCode: '33617',
      country: 'US'
    }
  },
  {
    id: '075e2272-6cce-4d90-aaf3-52d4201cb35b',
    location: 'Tampa',
    email: 'first_4_last @example.com',
    gender: 'M',
    type: 'Associate',
    name: {
      id: 'dab890ad-6e53-44df-8654-85288ac7c916',
      first: 'Jack',
      middle: null,
      last: 'Smith'
    },
    address: {
      address1: '12977 N 50TH ST',
      address2: 'RM 315',
      city: 'Tampa',
      state: 'FL',
      postalCode: '33617',
      country: 'US'
    }
  },
  {
    id: '1b74e2b8-4145-4132-93be-62b53d47b39f',
    location: 'Tampa',
    email: 'first_1_last @example.com',
    gender: 'M',
    type: 'Associate',
    name: {
      id: '5cfcf99d-317f-42e8-bee3-d153f66011f0',
      first: 'James',
      middle: null,
      last: 'Codwell'
    },
    address: {
      address1: '12977 N 50TH ST',
      address2: 'RM 219',
      city: 'Tampa',
      state: 'FL',
      postalCode: '33617',
      country: 'US'
    }
  }
];

export const mockBatches: Batch[] = [{
    id: 'b159e599-dc84-4021-8af9-53f8c28e0af6',
    location: '',
    startDate: '2018-06-18T10:18:10.717',
    endDate: '2018-06-18T10:18:10.717',
    batchName: 'Batch1',
    batchOccupancy: 50,
    batchSkill: 'C#',
    address: null,
    users: []
  },
  {
    id: '357126fe-9ca2-47a6-9664-70715ad93f80',
    location: '',
    startDate: '2018-06-18T10:21:47.287',
    endDate: '2018-06-18T10:21:47.287',
    batchName: 'Batch4',
    batchOccupancy: 50,
    batchSkill: 'C#',
    address: null,
    users: []
  },
  {
    id: '134d8370-31be-4686-aab1-b164db3f8c3a',
    location: '',
    startDate: '2018-06-18T10:21:47.287',
    endDate: '2018-06-18T10:21:47.287',
    batchName: 'Batch2',
    batchOccupancy: 50,
    batchSkill: 'C#',
    address: null,
    users: []
  },
  {
    id: '33f5fb59-b4c2-4f29-8cef-c98745d46e9a',
    location: '',
    startDate: '2018-06-18T10:21:47.287',
    endDate: '2018-06-18T10:21:47.287',
    batchName: 'Batch3',
    batchOccupancy: 50,
    batchSkill: 'C#',
    address: null,
    users: []
  },
  {
    id: '1eee08bd-8bf6-4bcb-bd4e-ded705e1ba6d',
    location: '',
    startDate: '2018-06-18T10:18:10.717',
    endDate: '2018-06-18T10:18:10.717',
    batchName: 'Batch5',
    batchOccupancy: 50,
    batchSkill: 'C#',
    address: null,
    users: []
  },
  {
    id: '4e7d37da-21a4-4016-9f03-f394c5db900d',
    location: '',
    startDate: '2018-06-18T10:18:10.717',
    endDate: '2018-06-18T10:18:10.717',
    batchName: 'Batch6',
    batchOccupancy: 50,
    batchSkill: 'C#',
    address: null,
    users: []
  }
];
