import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { ProductListService } from './product-list.service';
import { Product } from './../interfaces/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  listOfProducts: Product[]  = [];

  constructor(private cart: CartService, private productList: ProductListService) { 
    let _this = this;
    productList.get().subscribe(products=>{
      _this.listOfProducts = products;
    });
  }

  addToCart(item:any){
    this.cart.addToCart(item);
  }
  ngOnInit() {
    
  }

}
