import { User } from './user.model';
import { Room } from './room.model';
/**
 * Model to faciliate history of changes for current session.
 *
 * @'export
 * @'class Tracker
 */
export class Tracker {
  User: User;
  Room: Room;
  Action: string;
  Iteration: number;
}
