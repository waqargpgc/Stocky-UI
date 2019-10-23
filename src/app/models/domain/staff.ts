import {BaseModel, Location} from '../index';

export class Staff extends BaseModel {
    name: string;
    phone: string;
    email: string;
    staff: Staff;

    managerId: string;
    locationId: string;
    location: Location;
  }
