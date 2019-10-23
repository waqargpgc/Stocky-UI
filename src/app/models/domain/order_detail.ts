import {BaseModel} from '../index';

export class OrderDetail extends BaseModel {
    unitPrice: number;
    quantity: number;
    discount: number;
    productId: string;
    orderId: string;
  }
