import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { FilterPanelComponent } from './filter-panel.component';
import { FilterService } from '../../services/filter.service';
import { FilterSortService } from '../../services/filter-sort.service';
import { UserStore } from '../../stores/user.store';
import { RoomStore } from '../../stores/room.store';
import { BatchStore } from '../../stores/batch.store';
import { LocationStore } from '../../stores/location.store';

describe('FilterPanelComponent', () => {
  let component: FilterPanelComponent;
  let fixture: ComponentFixture<FilterPanelComponent>;
  let componentwith: FilterPanelComponent;
  let MockUserStore;
  let MockRoomStore;
  let MockBatchStore;
  let MockLocationStore;
  let MockFilter;
  let MockFilterSort;
  let MockRouter;

  beforeEach(async(() => {
    MockUserStore = jasmine.createSpyObj(['updateUsers']);
    MockRoomStore = jasmine.createSpyObj(['updateRooms']);
    MockBatchStore = jasmine.createSpyObj(['batches', 'updateBatches']);
    MockLocationStore = jasmine.createSpyObj(['locations']);
    MockFilter = jasmine.createSpyObj(['getFilter', 'setFilter']);
    MockFilterSort = jasmine.createSpyObj(['getFilter', 'setFilter']);
    MockRouter = jasmine.createSpyObj(['url']);

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [ FilterPanelComponent ],
      providers: [
        {provide: FilterService, useValue: MockFilter},
        {provide: FilterSortService, useValue: MockFilterSort},
        {provide: UserStore, useValue: MockUserStore},
        {provide: RoomStore, useValue: MockRoomStore},
        {provide: BatchStore, useValue: MockBatchStore},
        {provide: LocationStore, useValue: MockLocationStore}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPanelComponent);
    componentwith = new FilterPanelComponent(
      MockUserStore,
      MockRoomStore,
      MockBatchStore,
      MockLocationStore,
      MockFilter,
      MockFilterSort,
      MockRouter
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign values to filter', () => {
    let expectedBatchId = "batchId";
    let expectedLocation = "Location";
    let expectedGender = "male";
    let expectedVRO = true;
    let expectedHBA = false;
    let expectedAssigned = true;

    component.batchId = expectedBatchId;
    component.location = expectedLocation;
    component.gender = expectedGender;
    component.vacantRoomsOnly = expectedVRO;
    component.hasBedAvailable = expectedHBA;
    component.housingSituation = expectedAssigned;

    component.AssignValuesToFilter();

    expect(component.filter.batch).toBe(expectedBatchId);
    expect(component.filter.location).toBe(expectedLocation);
    expect(component.filter.gender).toBe(expectedGender);
    expect(component.filter.isCompletelyUnassigned).toBe(expectedVRO);
    expect(component.filter.hasBedAvailable).toBe(expectedHBA);
    expect(component.filter.assigned).toBe(expectedAssigned);
  });

  it('should publish to filter service', () => {
    componentwith.batchId = '1002';

    componentwith.update();

    expect(MockFilter.setFilter).toHaveBeenCalledWith(componentwith.filter);
  });

  it('should publish to sort filter serivce', () => {
    let expectSortByMV = true;

    componentwith.sortByMostVacancies = expectSortByMV;

    componentwith.updateSort();

    expect(componentwith.sort.sortByMostVacancies).toBe(expectSortByMV);
    expect(MockFilterSort.setFilter).toHaveBeenCalledWith(componentwith.sort);
  });

  it('should update the stores', () => {
    componentwith.update();

    expect(MockUserStore.updateUsers).toHaveBeenCalled();
    expect(MockRoomStore.updateRooms).toHaveBeenCalled();
    expect(MockBatchStore.updateBatches).toHaveBeenCalled();
  });
});
