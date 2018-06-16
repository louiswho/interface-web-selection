import { Component, OnInit } from '@angular/core';
import { ChangeStore } from '../../stores/change.store';
import { MatTableDataSource } from '@angular/material';
import { Tracker } from '../../models/tracker.model';

/**
* Angular material view of pending room assignment changes
* retreived data from changestore and displays as table to be confirmed by user
*/

@Component({
  selector: 'lib-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  displayedColumns = ['User', 'Room', 'Action'];
  dataSource: MatTableDataSource<Tracker>;

  constructor(private changeStore: ChangeStore) { }

  ngOnInit() {
    this.changeStore.changes$.subscribe(changes => this.dataSource = new MatTableDataSource(changes));
  }

}
