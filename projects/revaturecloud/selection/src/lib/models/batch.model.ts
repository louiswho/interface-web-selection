/**
 * An object representing the expected output from the
 * housing selection API endpoint "/Batches/".
 *
 * Endpoints which return this object:
 * "https://github.com/mjbradvica/service-hub-housing-ui-wiki/wiki/Housing-Selection-API-Endpionts"
 *   (GET) All Batches - /Batches
 *
 * The service-hub-housing-wiki's page on this object:
 * "https://github.com/mjbradvica/service-hub-housing-ui-wiki/wiki/Batch-Model"
 * @'export
 * @'class Batch
 */
import { Address } from './address.model';
import { User } from './user.model';

export class Batch {
  id: string;
  location: string;
  startDate: string;
  endDate: string;
  batchName: string;
  batchOccupancy: number;
  batchSkill: string;
  address: Address;
  users: User[];
}
