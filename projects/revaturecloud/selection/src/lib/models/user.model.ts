/**
* An object representing the expected output from the
* housing selection API endpoints "/Users/" and "/Users/Unassigned".
*
* Endpoints which return this object:
* "https://github.com/mjbradvica/service-hub-housing-ui-wiki/wiki/Housing-Selection-API-Endpionts"
*   (GET) All Users - /Users
*   (GET) All Users Without A Room - /Users/Unassigned
*
* The service-hub-housing-wiki's page on this object:
* "https://github.com/mjbradvica/service-hub-housing-ui-wiki/wiki/User-Model"
 * @'export
 * @'class User
*/

import { Address } from './address.model';
import { Name } from './name.model';

export class User {
  id: string;
  location: string;
  email: string;
  gender: string;
  type: string;
  name: Name;
  address: Address;

  /**
   * Answers the question.
   */
  static isMale(user: User): boolean {
    let g: string = user.gender.toLowerCase();
    return g === 'male' || g === 'm';
  }
  static isFemale(user: User): boolean {
    let g: string = user.gender.toLowerCase();
    return g === 'female' || g === 'f';
  }
}
