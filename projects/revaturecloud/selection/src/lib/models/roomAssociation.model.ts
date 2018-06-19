/**
 * This is the model for room associations, used for both adding and
 * removing someone from a room.
 *
 * Because there is more than one method that utilize this same data model,
 * it has been extracted into its own model class instead of being an
 * anonymous object such that there is a single place where I can go to
 * update the model for the change.
 * @'export
 * @'class RoomAssociation
 */

export class RoomAssociation {
  userId: string;
  roomId: string;
}
