import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RoomCardComponent } from '../room-card/room-card.component';
import { RoomSearchPipe } from '../../shared/roomsearch.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  MatInputModule,
  MatGridListModule,
  MatCardModule,
  MatFormFieldModule,
  MatDividerModule,
  MatIconModule,
} from '@angular/material';
import { PutService } from '../../services/put.service';
describe('RoomCardComponent', () => {
  let fixture: ComponentFixture<RoomCardComponent>;
  let comp: RoomCardComponent;
  let mockService;
  let testRooms = [];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RoomCardComponent,
        RoomSearchPipe
      ],
      imports: [
        MatGridListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        NgxPaginationModule,
        MatIconModule,
        MatDividerModule,
        HttpClientTestingModule
      ],
      providers: [{provide: PutService, useValue: mockService}]
    }).compileComponents();
    fixture = TestBed.createComponent(RoomCardComponent);
    comp = fixture.debugElement.componentInstance;

    testRooms = [
      {
        id: null,
        location: null,
        email: null,
        gender: 'male',
        type: null,
        name: null,
        address: null
      },
      {
        id: null,
        location: null,
        email: null,
        gender: 'fill',
        type: null,
        name: null,
        address: null
      }
    ];

    mockService = jasmine.createSpyObj(['unassign'])

  }));
  it('should create the component', async(() => {
    expect(comp).toBeTruthy;
  }));
  it('should be male', () => {
    expect(fixture.componentInstance.isMale(testRooms[0])).toBeTruthy();
  });
  it('should not be female', () => {
    expect(fixture.componentInstance.isFemale(testRooms[0])).toBeFalsy();
  });
  it('should be fill', () => {
    expect(fixture.componentInstance.isFill(testRooms[1])).toBeTruthy();
  });
});
