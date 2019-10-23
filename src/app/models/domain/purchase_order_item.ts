import {BaseModel, Product, PurchaseOrder} from '../index';

export class PurchaseOrderItem extends BaseModel {
    unitPrice: number;
    quantity: number;
    discount: number;
    PurchaseOrderId: string;
    ProductId: string;
    purchaseOrder: PurchaseOrder;
    product: Product;
  }
