import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  /**
   * A pipe which filters a user array based on the given search string.
   *
   * param value The list of users being filtered.
   * param searchString the terms to search the user list for.
   */
  transform(value: User[], searchString: string): User[] {
    if (value.length === 0 || searchString === '') {
      return value;
    }
    let foundUsers: User[] = [];
    for (let user of value) {
      if (user.name.first.toLowerCase().includes(searchString.toLowerCase()) ||
        user.name.last.toLowerCase().includes(searchString.toLowerCase())) {
        foundUsers.push(user);
      }
    }
    return foundUsers;
  }
}
