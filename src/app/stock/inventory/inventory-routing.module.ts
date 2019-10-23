import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes =
  [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    {
      path: "products",
      component: ProductComponent,
      data: {
        title: "products"
      }
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
