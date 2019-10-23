import {BaseModel, Product,SaleOrder } from '../index';

export class SaleOrderItem extends BaseModel {
    unitPrice: number;
    quantity: number;
    discount: number;
    productId: string;
    saleOrderId: string;

    saleOrder: SaleOrder;
    product: Product;
  }
