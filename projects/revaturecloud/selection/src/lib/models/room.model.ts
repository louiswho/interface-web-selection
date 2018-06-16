/**
 * An object representing the expected output from the
 * housing selection API endpoints "/Rooms/" and "/Rooms/ComplexObject".
 *
 * Endpoints which return this object:
 * "https://github.com/mjbradvica/service-hub-housing-ui-wiki/wiki/Housing-Selection-API-Endpionts"
 *   (GET) All Rooms - /Rooms
 *   (GET) All Rooms in One Location - /Rooms/ComplexObject
 *   (GET) All Rooms With Unassigned Bed By Gender - /Rooms/ComplexObject
 *   (GET) All Rooms With All Unassigned Bed By Gender - /Rooms/ComplexObject
 *   (GET) All Rooms With Unassigned Bed By Gender/Batch Percentage - /Rooms/ComplexObject
 *
 * The service-hub-housing-wiki's page on this object:
 * "https://github.com/mjbradvica/service-hub-housing-ui-wiki/wiki/Room-Model"
 * @export
 * @class Room
 */

import { Address } from './address.model';
import { User } from './user.model';

export class Room {
  roomId: string;
  location: string;
  vacancy: number;
  occupancy: number;
  gender: string;
  address: Address;
  users: User[];
}
