
export abstract class BaseModel {
    id: number;
    isActive: boolean;
    isDeleted: boolean;
    createdBy: any;
    updatedBy: any;
    updatedDate: Date;
    createdDate: Date;
  }
