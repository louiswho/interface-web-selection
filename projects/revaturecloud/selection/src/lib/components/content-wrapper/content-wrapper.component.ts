import { Component, OnInit } from '@angular/core';

/**
* This component is used to display the room and user card using
* the lib-user-card-wrapper and lib-room-card-warpper selectors.
*/

@Component({
  selector: 'lib-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
