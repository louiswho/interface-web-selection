/**
  * This is the complex object expected at the housing
  * selection API endpiont “/Rooms/ComplexObject”
  *
  * https://github.com/mjbradvica/service-hub-housing-ui-wiki/wiki/Housing-Selection-API-Endpionts
  * The above is the URL for the “Housing Selection API Endpionts” wiki,
  * which describes the model expectations for the ComplexObject in the
  * following use cases as of 6/14/2018:
  *   (GET) All Rooms in One Location - /Rooms/ComplexObject
  *   (GET) All Rooms With Unassigned Bed By Gender - /Rooms/ComplexObject
  *   (GET) All Rooms With All Unassigned Bed By Gender - /Rooms/ComplexObject
  *   (GET) All Rooms With Unassigned Bed By Gender/Batch Percentage - /Rooms/ComplexObject
  * RoomSearchViewModel
  * {
  * string Location
  * string Batch
  * int BatchMinimumPercentage
  * char Gender
  * bool IsCompletelyUnassigned
  * }
  * @'export
  * @'class SearchParameters
  */

export class SearchParameters {
  batch: string;
  location: string;
  gender: string;
  batchMinimumPercentage: number;
  isCompletelyUnassigned: boolean;
  hasBedAvailable: boolean;
  assigned: boolean;
}
