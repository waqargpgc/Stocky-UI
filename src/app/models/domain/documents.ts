import { BaseModel, Product} from '../index';

export class Document extends BaseModel {
    name: string;
    contentType: string;
    title: string;// Invoice change (RECEIVED or ISSUES items)
    description: string;
    size: number;
    documentURL: string;
    productId: string;
    product: Product;
  }
