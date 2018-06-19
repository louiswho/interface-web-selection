import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { UserCardComponent } from "./user-card.component";
import { Room } from "../../models/room.model";
import { By, BrowserModule } from "@angular/platform-browser";
import { NO_ERRORS_SCHEMA} from "@angular/core";
import { RoomStore } from "../../stores/room.store";
import { HttpClientModule } from "@angular/common/http";
import { of } from "rxjs/internal/observable/of";
import { PutService } from "../../services/put.service";
import { User } from "../../models/user.model";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


fdescribe('UserCardComponent', () => {
  let testRooms: Room[];
  let mockPutService;
  let mockRoomStore;

  beforeEach(() => {
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

    mockPutService = jasmine.createSpyObj(['assign']);
    mockRoomStore = jasmine.createSpyObj(['rooms']);

    TestBed.configureTestingModule({
      declarations: [UserCardComponent],
      imports: [HttpClientModule, BrowserModule, BrowserAnimationsModule],
      providers: [{provide: PutService, useValue: mockPutService},
        {provide: RoomStore, useValue: mockRoomStore}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  xit('should create the app', () => {
    let fixture = TestBed.createComponent(UserCardComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('should call addToFirstAvailable', fakeAsync(() => {
  //   let userA: User;
  //   userA =     {
  //     id: '1',
  //     location: 'Reston',
  //     email: "a@a.com",
  //     gender: "female",
  //     type: "Known",
  //     name: {
  //       id: "1000",
  //       first: "Petty",
  //       middle: "Meagan",
  //       last: "Barber"
  //     },
  //     address: {
  //       address1: "Fowler",
  //       address2: "411",
  //       city: "Reston",
  //       state: "Virginia",
  //       postalCode: "43417",
  //       country: "USA"
  //     }
  //   };

  //   let fixture = TestBed.createComponent(UserCardComponent);
  //   fixture.componentInstance.user = userA;

  //   spyOn(fixture.componentInstance, 'addToFirstAvailable');
  //   tick();
  //   fixture.detectChanges();

  //   expect(fixture.componentInstance.addToFirstAvailable).toHaveBeenCalled();
  // }));

  // //Integration test
  // it(`should call putService.assign when the UserCard Component's addToFirstAvailable button is clicked`, fakeAsync(() => {
  //   let userA: User;
  //   userA =     {
  //     id: '1',
  //     location: 'Reston',
  //     email: "a@a.com",
  //     gender: "female",
  //     type: "Known",
  //     name: {
  //       id: "1000",
  //       first: "Petty",
  //       middle: "Meagan",
  //       last: "Barber"
  //     },
  //     address: {
  //       address1: "Fowler",
  //       address2: "411",
  //       city: "Reston",
  //       state: "Virginia",
  //       postalCode: "43417",
  //       country: "USA"
  //     }
  //   };

  //   let fixture = TestBed.createComponent(UserCardComponent);
  //   fixture.componentInstance.user = userA;

  //   spyOn(fixture.componentInstance, 'addToFirstAvailable');
  //   mockRoomStore.rooms.and.returnValue(of(testRooms));

  //   fixture.detectChanges();

  //   const button = fixture.debugElement.queryAll(By.css('button'))[0];
  //   button.triggerEventHandler('addToFirstAvailable', null);
  //   fixture.detectChanges();
  //   tick();
  //   expect(fixture.componentInstance.addToFirstAvailable).not.toHaveBeenCalled();
  // }));

});
