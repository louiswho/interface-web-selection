import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { FilterSortService } from '../../services/filter-sort.service';
import { SearchParameters } from '../../models/searchParameters.model';
import { SortParameters } from '../../models/sortParameters.model';
import { UserStore } from '../../stores/user.store';
import { RoomStore } from '../../stores/room.store';
import { Router } from '@angular/router';
import { BatchStore } from '../../stores/batch.store';
import { Batch } from '../../models/batch.model';

/**
 * The filter panel of the housing selection front-end.
 *
 * Provides a UI that allows the user to filter and sort
 * the data shown in other components.
 */

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lib-side-bar',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {

  // Drop down select - options
  batches: Batch[];
  locations: Set<string>;
  //buildings: string[]; Not implemented

  // Drop down select - currently selected
  batchId: string;
  location: string;
  //building: string; Not implemented

  // Gender radio
  readonly genders: object[] = [
    {name: 'All', value: null},
    {name: 'Male', value: 'male'},
    {name: 'Female', value: 'female'},
    {name: 'Other', value: 'other'}
  ];
  gender: string;

  // Check box booleans
  vacantRoomsOnly: boolean;
  sortByMostVacancies: boolean;
  unhousedUsersOnly: boolean;
  unassignedUsers: boolean;
  hasBedAvailable: boolean;

  // Output object
  filter: SearchParameters;
  sort: SortParameters;

  constructor(
    private userStore: UserStore,
    private roomStore: RoomStore,
    private batchStore: BatchStore,
    private filterService: FilterService,
    private filterSortService: FilterSortService,
    private _router: Router) {

    this.filter = {
      batch: null,
      location: null,
      gender: null,
      batchMinimumPercentage: null,
      isCompletelyUnassigned: null,
      hasBedAvailable: null,
      unassigned: null,
    };

    this.sort = {
      sortByMostVacancies: false,
    };
  }

  ngOnInit() {
    this.batchStore.batches.subscribe((res) => {
      this.batches = res;
    });
    this.roomStore.rooms.subscribe((res) => {
      this.locations = new Set<string>(res.map((el) => {return el.location}));
    });
    //this.buildings = ['Not', 'Implemented', 'Yet'];
  }

  /**
   * Takes the current values in the filter form and updates the
   * filterService given in the constructor.
   */
  update(): void {
    let tempGender: string;
    if (this.gender) {
      tempGender = this.gender.toLowerCase();
    } else {
      tempGender = this.gender;
    }

    this.filter = {
      batch: this.batchId,
      location: this.location,
      gender: tempGender,
      batchMinimumPercentage: null, // Not implemented
      isCompletelyUnassigned: this.vacantRoomsOnly,
      hasBedAvailable: this.hasBedAvailable,
      unassigned: this.unassignedUsers,
    };

    this.sort = {
      sortByMostVacancies: this.sortByMostVacancies,
    };

    this.filterService.setFilter(this.filter);
    this.filterSortService.setFilter(this.sort);
    this.userStore.updateUsers();
    this.roomStore.updateRooms();
    this.batchStore.updateBatches();
  }
}
