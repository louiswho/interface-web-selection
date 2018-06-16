import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { FilterPanelComponent } from './filter-panel.component';
import { FilterService } from '../../services/filter.service';
import { FilterSortService } from '../../services/filter-sort.service';

describe('FilterPanelComponent', () => {
  let component: FilterPanelComponent;
  let fixture: ComponentFixture<FilterPanelComponent>;
  let componentwith: FilterPanelComponent;
  let MockUserStore;
  let MockRoomStore;
  let MockFilter;
  let MockFilterSort;

  beforeEach(async(() => {
    MockUserStore = jasmine.createSpyObj(['updateUsers']);
    MockRoomStore = jasmine.createSpyObj(['updateRooms']);
    MockFilter = jasmine.createSpyObj(['getFilter', 'setFilter']);
    MockFilterSort = jasmine.createSpyObj(['getFilter', 'setFilter']);

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [ FilterPanelComponent ],
      providers: [
        {provide: FilterService, useValue: MockFilter},
        {provide: FilterSortService, userValue: MockFilterSort}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPanelComponent);
    componentwith = new FilterPanelComponent(
      MockUserStore, MockRoomStore, MockFilter, MockFilterSort);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset properly', () => {
    component.batch = "batch";
    component.city = "asdf";
    component.building = "asdf";

    component.reset();

    expect(component.batch).toBeNull();
    expect(component.city).toBeNull();
    expect(component.building).toBeNull();
  });

  it('should publish to filter service', () => {
    componentwith.batch = 'batch1';

    componentwith.update();

    expect(MockFilter.setFilter).toHaveBeenCalledWith(componentwith.filter);
  });

  it('should publish to filter sort service', () => {
    componentwith.sortByMostVacancies = true;

    componentwith.update();

    expect(MockFilterSort.setFilter).toHaveBeenCalledWith(componentwith.sort);
  });
});
