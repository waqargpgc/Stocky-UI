import { BaseModel, SaleOrder} from '../index';

export class Customer extends BaseModel {
    name: string;
    address: string;
    mobile: string;
    phone: string;
    email: string;
    street: string;
    city: string;

    state: string;
    zipCode: string;
    saleOrders: SaleOrder[];
  }
