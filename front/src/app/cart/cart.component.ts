import { Component, OnInit ,Input} from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cartItens: any = [];
  constructor() { }

  ngOnInit() {
    CartService.addedProductEmitter.subscribe(products=>{
      this.cartItens = products;
    });
  }
}
