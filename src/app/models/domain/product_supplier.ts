import {BaseModel, Product, Supplier} from '../index';

export class ProductSupplier extends BaseModel {
    price: number;
    productId: string;
    product: Product;
    supplierId: string;
    supplier: Supplier;
  }
