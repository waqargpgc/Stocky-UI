import { BaseModel, Product} from '../index';

export class Color extends BaseModel {
    name: string;
    description: string;
    colorCode: string;

    products: Product[];
  }
