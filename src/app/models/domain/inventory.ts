import { BaseModel } from '../index';

export class Inventory extends BaseModel {
    tags: string;
    description: string;
    stockLevel: number;
    productId: string;
    locationId: string;
    // TODO: Product, Location
  }
