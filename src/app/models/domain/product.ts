import {BaseModel, Inventory, OrderDetail, Order, ProductCategory} from '../index';

export class Product extends BaseModel {
    name: string;
    description: string;

    icon: string;
    sKU: string; // Stock Keeping Unit
    uPC: string; // Universal Product Code
    sNO: string; // Serial Numbers separated with comma
    tags: string;
    barcodeNumber: string;
    barcodeSystem: string;
    color: string;
    productPageURL: string;
    depth: number;
    height: number;
    weight: number;
    width: number;
    size: number;

    unitsInStock: number;
    minStockLevel: number;
    buyingPrice: number;
    sellingPrice: number;
    isDiscontinued: boolean;
    inventoryLocationId: string;
    parentId: string;
    supplierId: string;
    productCategoryId: string;
    manufacturerId: string;
    isParent: boolean;
    isActive: boolean;
    isDeleted: boolean;

    inventories: Inventory[];
    productCategories: ProductCategory[];
    orderDetailList: OrderDetail[];
    orders: Order[];
    children: Product[];
  }
