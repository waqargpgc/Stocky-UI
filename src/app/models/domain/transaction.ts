import {BaseModel} from '../index';

export class Transaction extends BaseModel {
    type: string;
    quantity: number;
    invoiceChange: number; // Invoice change (RECEIVED or ISSUES items)
    remarks: string;
    applicationUserId: string;
  }
