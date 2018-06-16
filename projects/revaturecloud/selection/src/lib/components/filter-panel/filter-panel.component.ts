import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { FilterSortService } from '../../services/filter-sort.service';
import { SearchParameters } from '../../models/searchParameters.model';
import { SortParameters } from '../../models/sortParameters.model';
import { UserStore } from '../../stores/user.store';
import { RoomStore } from '../../stores/room.store';
import { Router } from '@angular/router';

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
  batches: string[];
  locations: string[];
  buildings: string[];

  // Drop down select - currently selected
  batch: string;
  location: string;
  building: string;

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

  // Output object
  filter: SearchParameters;
  sort: SortParameters;

  constructor(
    private userStore: UserStore,
    private roomStore: RoomStore,
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

    this._router = _router;
  }

  ngOnInit() {
    // this.batches = new Set(this.selectionService.getAllBatches());
    // this.cities = new Set(this.selectionService.getAllCities());
    // this.buildings = new Set(this.selectionService.getAllBuildings());
    this.batches = ['batch1', 'batch2', 'batch3'];
    this.locations = ['Chicago', 'Reston', 'Tampa', 'New York'];
    this.buildings = ['b1', 'b2', 'b3'];
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
      batch: this.batch,
      location: this.location,
      gender: tempGender,
      batchMinimumPercentage: null, // Not implemented
      isCompletelyUnassigned: this.vacantRoomsOnly,
      hasBedAvailable: null, // Not implemented
      unassigned: this.unassignedUsers,
    };

    this.sort = {
      sortByMostVacancies: this.sortByMostVacancies,
    };

    this.filterService.setFilter(this.filter);
    this.filterSortService.setFilter(this.sort);
    this.userStore.updateUsers();
    this.roomStore.updateRooms();
  }
}
