import {BaseModel, OrderStatus, SaleOrderItem} from '../index';

export class SaleOrder extends BaseModel {
    orderReference: string;
    totalAmount: number;
    comments: string;
    customerId: string;
    status: OrderStatus;
    orderDate: Date;
    requiredDate: Date;
    shippedDate: Date;
    locationId: string;
    staffId: string;
    customerName: string;
    customerAddress: string;
    customerPhone: string;
    customerMobile: string;
    customerEmail: string;
    customerStreet: string;
    customerCity: string;
    customerState: string;
    customerZipCode: string;
    saleOrderItems: SaleOrderItem[];
  }
