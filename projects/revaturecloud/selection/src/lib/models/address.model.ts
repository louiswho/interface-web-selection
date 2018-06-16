/**
 * An object representing the Address field in the
 * User and Room objects returned in the housing selection API.
 *
 * Endpoints which return this object as a nested object:
 * "https://github.com/mjbradvica/service-hub-housing-ui-wiki/wiki/Housing-Selection-API-Endpionts"
 *   (GET) All Rooms - /Rooms
 *   (GET) All Rooms in One Location - /Rooms/ComplexObject
 *   (GET) All Rooms With Unassigned Bed By Gender - /Rooms/ComplexObject
 *   (GET) All Rooms With All Unassigned Bed By Gender - /Rooms/ComplexObject
 *   (GET) All Rooms With Unassigned Bed By Gender/Batch Percentage - /Rooms/ComplexObject
 *   (GET) All Users - /Users
 *   (GET) All Users Without A Room - /Users/Unassigned
 *
 * The service-hub-housing-wiki's page on this object:
 * "https://github.com/mjbradvica/service-hub-housing-ui-wiki/wiki/Room-Model"
 * "https://github.com/mjbradvica/service-hub-housing-ui-wiki/wiki/User-Model"
 *  Address - Custom Class
 *  Address - Street - string, APT - string
 *  City - string, State - string, PostalCode - string, Country - string
 * @export
 * @class Batch
 */

export class Address {
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}
