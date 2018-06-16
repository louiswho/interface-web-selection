import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserStore } from '../../stores/user.store';

/**
* This component uses lib-user-card selector to display all the users stored in our db.
* Users data is pulled from the UserStore service. The search bar uses first and last
* name to search the user. It also implements pagination for the user cards.
*/
@Component({
  selector: 'lib-user-card-wrapper',
  templateUrl: './user-wrapper.component.html',
  styleUrls: ['./user-wrapper.component.css']
})
export class UserWrapperComponent implements OnInit {

  allUsers:User[];
  userName = '';

  constructor(private userStoreService: UserStore) { }

  ngOnInit() {
    this.userStoreService.users.subscribe((res) => {
      this.allUsers = res;
    });
  }
}
