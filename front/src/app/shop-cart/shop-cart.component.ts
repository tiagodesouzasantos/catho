import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './../cart/cart.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit {
  @Input() cartItens: any = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    CartService.addedProductEmitter.subscribe(products => {

    });
    this.loadCart();
    
  }
  loadCart(){
    let newCartItens = [];
    for (let item of CartService.cartList) {
      if (newCartItens[item._id]) {
        newCartItens[item._id] = {
          ...item,
          qtd: newCartItens[item._id].qtd + 1
        }
      } else {
        newCartItens[item._id] = {
          ...item,
          qtd: 1
        }
      }
    }
    for (let key in newCartItens) {
      this.cartItens.push(newCartItens[key]);
    }
  }

  deleteFromCart(item,_id){
    this.cartService.deleteItem(item._id);
    if (this.cartItens[_id].qtd<=1){
      this.cartItens[_id].splice(_id,1);
    }else{
      this.cartItens[_id].qtd--;
    }
    console.log(item);
  }
  trackByFn(i :number){
    return i;
  }
}
