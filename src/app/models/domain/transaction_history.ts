import {BaseModel} from '../index';

export class TransactionHistory extends BaseModel {
    type: string;
    quantity: number;
    invoiceChange: string;
    cumQty: number;
    remarks: string;
    applicationUserId: string;

  }
