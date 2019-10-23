
// abstract class BaseModel {
//   id: number;
//   isActive: boolean;
//   isDeleted: boolean;
//   createdBy: any;
//   updatedBy: any;
//   updatedDate: Date;
//   createdDate: Date;
// }

// // Order
// enum OrderStatus { Draft = 1, Released = 2, Completed = 3, Paid = 4 }

// //Area
// export class Area extends BaseModel {
//   Name: string;
//   Description: string;
// }

// // Supplier
// export class Supplier extends BaseModel {
//   name: string;

//   address: string;
//   mobile: string;
//   phone: string;
//   email: string;
//   street: string;
//   city: string;
//   state: string;
//   zipCode: string;
//   purchaseOrder: PurchaseOrder[];
//   productSupplier: ProductSupplier[];
// }

// // Customer
// export class Customer extends BaseModel {
//   name: string;
//   address: string;
//   mobile: string;
//   phone: string;
//   email: string;
//   street: string;
//   city: string;

//   state: string;
//   zipCode: string;
//   saleOrder: SaleOrder[];
// }

// //SaleOrderS
// export class SaleOrder extends BaseModel {
//   orderReference: string;
//   totalAmount: number;
//   comments: string;
//   customerId: string;
//   status: OrderStatus;
//   orderDate: Date;
//   requiredDate: Date;
//   shippedDate: Date;
//   storeId: string;
//   staffId: string;
//   customerName: string;
//   customerAddress: string;
//   customerPhone: string;
//   customerMobile: string;
//   customerEmail: string;
//   customerStreet: string;
//   customerCity: string;
//   customerState: string;
//   customerZipCode: string;
//   saleOrderItem: SaleOrderItem[];
// }

// //SaleOrderItem
// export class SaleOrderItem extends BaseModel {
//   unitPrice: number;
//   quantity: number;
//   discount: number;
//   ProductId: string;
//   saleOrderId: string;

//   saleOrder: SaleOrder;
//   product: Product;
// }

// // Inventory
// export class Inventory extends BaseModel {
//   tags: string;
//   description: string;
//   stockLevel: number;
//   productId: string;
//   StoreId: string;
// }

// //Brand
// export class Brand extends BaseModel {
//   name: string;
//   description: string;

// }


// export class Order extends BaseModel {
//   orderReference: string;
//   discount: number;
//   totalAmount: number;
//   comments: string;
//   status: OrderStatus;

//   customerId: number;
//   orderDetailList: OrderDetail[];

//   // Destructure data from customer
//   // needed for instant transaction - a Customer may not always be registered/added.
//   custAddress: string;
//   custName: string;
//   custMobile: string;
//   custEmail: string;
// }

// // OrderDetail
// export class OrderDetail extends BaseModel {
//   unitPrice: number;
//   quantity: number;
//   discount: number;
//   productId: string;
//   orderId: string;
// }

// // Tag
// export class Tag extends BaseModel {
//   name: string;
// }
// // TransactionHistory
// export class TransactionHistory extends BaseModel {
//   type: string;
//   quantity: number;
//   invoiceChange: string;
//   cumQty: number;
//   remarks: string;
//   ApplicationUserId: string;

// }

// // Transaction
// export class Transaction extends BaseModel {
//   type: string;
//   quantity: number;
//   invoiceChange: number; // Invoice change (RECEIVED or ISSUES items)
//   remarks: string;
//   applicationUserId: string;
// }
// //Image
// export class Image extends BaseModel {
//   name: string;
//   contentType: string;
//   title: string;// Invoice change (RECEIVED or ISSUES items)
//   description: string;
//   size: number;
//   imageURL: string;
//   userId: string;
//   //ApplicationUser:ApplicationUser;
// }

// //Document
// export class Document extends BaseModel {
//   name: string;
//   contentType: string;
//   title: string;// Invoice change (RECEIVED or ISSUES items)
//   description: string;
//   size: number;
//   documentURL: string;
//   ProductId: string;
//   product: Product;
// }


// // ProductCategory
// export class ProductCategory extends BaseModel {
//   name: string;
//   description: string;
//   icon: string;
//   products: Product[];
// }

// // Product
// export class Product extends BaseModel {
//   name: string;
//   description: string;

//   icon: string;
//   sKU: string; // Stock Keeping Unit
//   uPC: string; // Universal Product Code
//   sNO: string; // Serial Numbers separated with comma
//   tags: string;
//   barcodeNumber: string;
//   barcodeSystem: string;
//   color: string;
//   productPageURL: string;
//   depth: number;
//   height: number;
//   weight: number;
//   width: number;
//   size: number;

//   unitsInStock: number;
//   minStockLevel: number;
//   buyingPrice: number;
//   sellingPrice: number;
//   isDiscontinued: boolean;
//   inventoryLocationId: string;
//   parentId: string;
//   supplierId: string;
//   productCategoryId: string;
//   manufacturerId: string;
//   isParent: boolean;
//   isActive: boolean;
//   isDeleted: boolean;

//   inventories: Inventory[];
//   productCategories: ProductCategory[];
//   orderDetailList: OrderDetail[];
//   orders: Order[];
//   children: Product[];
// }

// // PurchaseOrder
// export class PurchaseOrder extends BaseModel {
//   orderDate: Date;
//   requiredDate: Date;
//   shippedDate: Date;
//   status: OrderStatus;
//   orderReference: string;
//   totalAmount: number;
//   comments: string;
//   supplierId: string;

//   // supplierPhone: number;
//   // supplierAddress: string;
//   // supplierName: string;
//   // supplierMobile: string;
//   // supplierEmail: string;
//   // supplierStreet: string;
//   // supplierCity: string;
//   // supplierState: string;
//   // supplierZipCodess: string;

//   supplier: Supplier;
//   PurchaseOrderItems: PurchaseOrderItem[];
// }
// //Color

// export class Color extends BaseModel {
//   name: string;
//   description: string;
//   colorCode: string;

//   product: Product[];
// }

// //Size
// export class Size extends BaseModel {
//   name: string;
//   description: string;
//   product: Product[];
// }

// //ProductSupplier
// export class ProductSupplier extends BaseModel {
//   price: number;
//   productId: string;
//   product: Product;
//   supplierId: string;
//   supplier: Supplier;
// }

// //Staff
// export class Staff extends BaseModel {
//   name: string;
//   phone: string;
//   email: string;
//   managerId: string;
//   staff: Staff;
//   storeId: string;
//   store: Store;
// }

// //Stock
// export class Stock extends BaseModel {
//   quantity: number;

//   storeId: string;
//   store: Store;
//   ProductId: string;
//   product: Product;
// }

// //Store
// export class Store extends BaseModel {
//   name: string;

//   phone: string;
//   email: string;
//   street: string;
//   city: string;
//   state: string;
//   zipCode: string;

//   inventory: Inventory[];
//   stock: Stock[];
//   staff: Staff[];
// }

// //PurchaseOrderItem
// export class PurchaseOrderItem extends BaseModel {
//   unitPrice: number;
//   quantity: number;
//   discount: number;
//   PurchaseOrderId: string;
//   ProductId: string;
//   purchaseOrder: PurchaseOrder;
//   product: Product;
// }
