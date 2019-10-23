import {BaseModel, ProductSupplier, PurchaseOrder} from '../index';

export class Supplier extends BaseModel {
    name: string;

    address: string;
    mobile: string;
    phone: string;
    email: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    purchaseOrders: PurchaseOrder[];
    productSuppliers: ProductSupplier[];
  }
