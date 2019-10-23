import { BaseModel} from '../index';

export class Image extends BaseModel {
    name: string;
    contentType: string;
    title: string;// Invoice change (RECEIVED or ISSUES items)
    description: string;
    size: number;
    imageURL: string;
    userId: string;
    //ApplicationUser:ApplicationUser;
  }
