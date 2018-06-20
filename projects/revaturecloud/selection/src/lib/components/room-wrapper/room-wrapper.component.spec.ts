import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { Room } from "../../models/room.model";
import { BrowserModule } from "@angular/platform-browser";
import { NO_ERRORS_SCHEMA} from "@angular/core";
import { RoomStore } from "../../stores/room.store";
import { HttpClientModule} from "@angular/common/http";
import { of } from "rxjs/internal/observable/of";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RoomWrapperComponent } from "./room-wrapper.component";
import { NgxPaginationModule } from "ngx-pagination";
import { MatPaginatorModule } from "@angular/material";
import { RoomSearchPipe } from "../../shared/roomsearch.pipe";


describe('RoomWrapperComponent', () => {
  let testRooms: Room[];
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

    mockRoomStore = jasmine.createSpyObj(['rooms']);

    TestBed.configureTestingModule({
        declarations: [RoomWrapperComponent, RoomSearchPipe],
        imports: [HttpClientModule, BrowserModule, BrowserAnimationsModule, NgxPaginationModule, MatPaginatorModule],
        providers: [{provide: RoomStore, useValue: mockRoomStore}],
        schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(RoomWrapperComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call ngOnInit', fakeAsync(() => {
    let fixture = TestBed.createComponent(RoomWrapperComponent);
    fixture.componentInstance.rooms = testRooms;

    spyOn(fixture.componentInstance, 'ngOnInit');
    mockRoomStore.rooms.and.returnValue(of(testRooms));
    fixture.detectChanges();
    tick();
    expect(fixture.componentInstance.ngOnInit).toHaveBeenCalled();
  }));

});
