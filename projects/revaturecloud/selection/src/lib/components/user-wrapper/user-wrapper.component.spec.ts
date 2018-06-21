import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { BrowserModule } from "@angular/platform-browser";
import { NO_ERRORS_SCHEMA} from "@angular/core";
import { HttpClientModule} from "@angular/common/http";
import { of } from "rxjs/internal/observable/of";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { User } from "../../models/user.model";
import { UserWrapperComponent } from "./user-wrapper.component";
import { UserStore } from "../../stores/user.store";

import { NgxPaginationModule } from "ngx-pagination";
import { MatPaginatorModule } from "@angular/material";
import { SearchPipe } from "../../shared/search.pipe";


describe('UserWrapperComponent', () => {
  let testUsers: User[];
  let mockUserStore;

  beforeEach(() => {
    testUsers = [
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
    ];

    mockUserStore = jasmine.createSpyObj(['users']);

    TestBed.configureTestingModule({
        declarations: [UserWrapperComponent, SearchPipe],
        imports: [HttpClientModule,
          BrowserModule,
          BrowserAnimationsModule,
          NgxPaginationModule,
          MatPaginatorModule
        ],
        providers: [{provide: UserStore, useValue: mockUserStore}],
        schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(UserWrapperComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call ngOnInit', fakeAsync(() => {
    let userA: User;
    userA =     {
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

    let fixture = TestBed.createComponent(UserWrapperComponent);
    fixture.componentInstance.allUsers = [userA];

    spyOn(fixture.componentInstance, 'ngOnInit');
    mockUserStore.users.and.returnValue(of(testUsers));
    fixture.detectChanges();
    tick();
    expect(fixture.componentInstance.ngOnInit).toHaveBeenCalled();
  }));

});
