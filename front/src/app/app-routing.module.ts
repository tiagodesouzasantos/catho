import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'shop-cart', component: ShopCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
