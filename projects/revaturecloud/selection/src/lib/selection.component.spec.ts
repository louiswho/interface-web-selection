import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionComponent } from './selection.component';

describe('SelectionComponent', () => {
  let component: SelectionComponent;
  let fixture: ComponentFixture<SelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SelectionComponent
      ]
    });
    fixture = TestBed.createComponent(SelectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit on initialization', () => {
    const spy = spyOn(component, 'ngOnInit');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
