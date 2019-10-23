import {BaseModel, Product} from '../index';

export class Size extends BaseModel {
    name: string;
    description: string;
    products: Product[];
  }
