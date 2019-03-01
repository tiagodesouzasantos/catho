import { Injectable , EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  static addedProductEmitter = new EventEmitter<any>();
  cartList:any=[];
  constructor() { }
  addToCart(product:any){
    this.cartList.push(product);
    CartServiceService.addedProductEmitter.emit(this.cartList);
  }
}
