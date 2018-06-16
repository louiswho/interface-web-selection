import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomWrapperComponent } from './room-wrapper.component';

describe('RoomWrapperComponent', () => {
  let component: RoomWrapperComponent;
  let fixture: ComponentFixture<RoomWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
