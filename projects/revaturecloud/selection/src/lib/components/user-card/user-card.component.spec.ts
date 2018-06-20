import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { UserCardComponent } from "./user-card.component";
import { Room } from "../../models/room.model";
import { By, BrowserModule } from "@angular/platform-browser";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RoomStore } from "../../stores/room.store";
import { HttpClientModule} from "@angular/common/http";
import { of } from "rxjs/internal/observable/of";
import { PutService } from "../../services/put.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { User } from "../../models/user.model";
import { NgxPaginationModule } from "ngx-pagination";
import { MatPaginatorModule } from "@angular/material";
import { RoomSearchPipe } from "../../shared/roomsearch.pipe";

describe('UserCardComponent', () => {
  let testRooms: Room[];
  let mockPutService;
  let mockRoomStore;
  let componentwith: UserCardComponent;
  let userA: User;

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
    userA = {
      id: '1',
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
    };

    mockPutService = jasmine.createSpyObj(['assign']);
    mockRoomStore = jasmine.createSpyObj(['rooms', 'roomsValue']);
    componentwith = new UserCardComponent(mockPutService, mockRoomStore);

    TestBed.configureTestingModule({
      declarations: [UserCardComponent, RoomSearchPipe],
      imports: [HttpClientModule, BrowserModule, BrowserAnimationsModule, NgxPaginationModule, MatPaginatorModule],
      providers: [{ provide: PutService, useValue: mockPutService },
      { provide: RoomStore, useValue: mockRoomStore }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(UserCardComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call initRooms during initialization', fakeAsync(() => {
    let fixture = TestBed.createComponent(UserCardComponent);
    fixture.componentInstance.user = userA;

    spyOn(fixture.componentInstance, 'initRooms');
    mockRoomStore.rooms.and.returnValue(of(testRooms));
    fixture.detectChanges();
    tick();
    expect(fixture.componentInstance.initRooms).toHaveBeenCalled();
  }));

  it('should call assign from service with addUserToRoom call', () => {
    componentwith.dropDownValue = testRooms[0];
    componentwith.user = userA;

    componentwith.addUserToRoom();

    expect(mockPutService.assign).toHaveBeenCalledWith(userA, testRooms[0]);
  })

  it('should be housed', () => {
    componentwith.user = userA;
    expect(componentwith.isHoused()).toBeTruthy();
  })
});

