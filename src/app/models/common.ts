// Permission
export class Permission {
  name: string;
  groupName: string
  value: string;
  description: string;
}

// PermissionGroup
export class PermissionGroup {
  group: string;
  class: string;
  permissions: Permission[];
}

// PaginationModel
export class PaginationModel {
  //firstRecordOnPage: number;
  //lastRecordOnPage: number;
  //totalPages: number;
  //hasNext: boolean;
  //hasPrevious: boolean;
  currentPage: number = 1; // Todo: delete when done in account

  totalRecords: number = 0;
  pageNo: number = 1;
  pageSize: number = 10;
  search: string;
}

// IHttpSetup
export interface IHttpSetup {
  Root: string;
  EndPoint: string;
}

// HttpSetup
export class HttpSetup implements IHttpSetup {
  Root: string;
  EndPoint: string;

  constructor(endpoint: string, root: string = "https://plyxtock.herokuapp.com/api") {
    this.Root = root;
    this.EndPoint = endpoint;
  }
}
