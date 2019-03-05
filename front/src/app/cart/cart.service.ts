import { Injectable , EventEmitter} from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  static addedProductEmitter = new EventEmitter<Product>();
  static cartList:any=[];
  constructor() { }

  addToCart(product: Product){
    CartService.cartList.push(product);
    CartService.addedProductEmitter.emit(CartService.cartList);
    localStorage.setItem(
      'cartList',
      btoa(JSON.stringify(CartService.cartList))
    );
  }
  getStorageList(){
    return JSON.parse(atob(localStorage.getItem('cartList')));
  }

  realoadList(){
    if (CartService.cartList.length<1){
      let cartList = this.getStorageList();
      if(cartList){
        CartService.cartList = cartList;
      }
    }
  }
  deleteItem(_id){
    for (let i=0;i < CartService.cartList.length;i++){
      if (CartService.cartList[i]._id ==_id){
        CartService.cartList.splice(i,1);
      }
    }
    CartService.addedProductEmitter.emit(CartService.cartList);
  }
}
