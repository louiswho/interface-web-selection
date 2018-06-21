import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { BrowserModule } from "@angular/platform-browser";
import { NO_ERRORS_SCHEMA} from "@angular/core";
import { HttpClientModule} from "@angular/common/http";
import { of } from "rxjs/internal/observable/of";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxPaginationModule } from "ngx-pagination";
import { MatPaginatorModule, MatTableModule } from "@angular/material";
import { TableViewComponent } from "./table-view.component";
import { ChangeStore } from "../../stores/change.store";

describe('TableViewComponent', () => {
  let mockChangeStore;

  beforeEach(() => {
    mockChangeStore = jasmine.createSpyObj(['changes']);

    TestBed.configureTestingModule({
        declarations: [TableViewComponent],
        imports: [
          HttpClientModule,
          BrowserModule,
          BrowserAnimationsModule,
          NgxPaginationModule,
          MatPaginatorModule,
          MatTableModule
        ],

        providers: [{provide: ChangeStore, useValue: mockChangeStore}],
        schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(TableViewComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call ngOnInit', fakeAsync(() => {
    let fixture = TestBed.createComponent(TableViewComponent);
    fixture.componentInstance.dataSource = null;

    spyOn(fixture.componentInstance, 'ngOnInit');
    mockChangeStore.changes.and.returnValue(of(true));
    fixture.detectChanges();
    tick();
    expect(fixture.componentInstance.ngOnInit).toHaveBeenCalled();
  }));

});
