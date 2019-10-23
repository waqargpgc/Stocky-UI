import { BaseModel, Inventory, PurchaseOrder, Staff, Stock } from '../index';

export class Location extends BaseModel {
  name: string;

  phone: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;

  inventories: Inventory[];
  purchaseOrders: PurchaseOrder[];
  stocks: Stock[];
  staffs: Staff[];
}
