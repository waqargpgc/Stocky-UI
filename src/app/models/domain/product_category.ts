import {BaseModel, Product} from '../index';

export class ProductCategory extends BaseModel {
    name: string;
    description: string;
    icon: string;
    products: Product[];
  }
