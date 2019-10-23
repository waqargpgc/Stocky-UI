import {BaseModel, Location, Product} from '../index';

export class Stock extends BaseModel {
    quantity: number;
    locationId: string;
    location: Location;
    productId: string;
    product: Product;
  }
