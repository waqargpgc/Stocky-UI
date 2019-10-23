export class ApiEndPoints {
  public static readonly ApiRoot = "https://plyxtock.herokuapp.com";
  //public static readonly ApiRoot = "http://localhost:5000";

  public static readonly InventoryLocations = "api/stores";
  public static readonly Suppliers = "api/Suppliers";
  public static readonly Companies = "api/brands";
  public static readonly ProductCategories = "api/ProductCategories";
  public static readonly Customers = "api/Customers";
  public static readonly Products = "api/products";
  public static readonly Inventories = "api/inventories";

  public static readonly PurchaseOrders = "api/PurchaseOrders";
  public static readonly PurchaseOrderLookups = "api/PurchaseOrders/lookups";

  public static readonly PurchaseOrderItems = "api/PurchaseOrderItems";

  public static readonly Account = {
    "Login": "api/auth/login",
    "GetCurrentUser": "api/account/getuser",

    "CreateUser": "api/account/createuser",
    "UpdateUser": "api/account/updateuser",
    "UpdateAvatar": "api/account/updateavatar",
    "UpdateProfile": "api/account/updateprofile",
    "DeleteUser": "api/account/deleteuser", // deleteuser/id
    "GetUsers": "api/account/getusers",
    "GetSingleUser": "api/account/getusers", // getusers/[id,username]

    "CreateRole": "api/account/createrole",
    "DeleteRole": "api/account/deleterole", // deleterole/[id, name]
    "UpdateRole": "api/account/updaterole",
    "GetRoles": "api/account/getroles",
    "GetRolesForNewUser": "api/account/getallroles",// get all roles
    "GetSingleRole": "api/account/getroles",// getroles/[id, name]

    "GetAllPermissions": "api/account/getpermissions",
  };
}


export const avatarThumbnail = "assets/img/avatars/avatar.png";
