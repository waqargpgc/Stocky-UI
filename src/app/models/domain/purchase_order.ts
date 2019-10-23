import {BaseModel, OrderStatus, Supplier, Location, PurchaseOrderItem} from '../index';

export class PurchaseOrder extends BaseModel {
    orderDate: Date;
    requiredDate: Date;
    shippedDate: Date;
    status: OrderStatus;
    orderReference: string;
    totalAmount: number;
    comments: string;
    supplierId: string;
    locationId: string;

    supplier: Supplier;
    location: Location;
    purchaseOrderItems: PurchaseOrderItem[];
  }
