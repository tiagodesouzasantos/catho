import { Component, OnInit ,Input} from '@angular/core';
import { CartServiceService } from './../cart/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cartItens: any = [];
  constructor() { }

  ngOnInit() {
    CartServiceService.addedProductEmitter.subscribe(listProduct=>{
      this.cartItens.push(listProduct);
      console.log('CartComponent', listProduct);
      console.log('cartItens', this.cartItens);
    });

  }

}
