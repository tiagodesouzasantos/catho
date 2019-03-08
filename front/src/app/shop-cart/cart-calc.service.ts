import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartCalc } from './cart-calc';


@Injectable({
  providedIn: 'root'
})

export class CartCalcService {

  constructor(private httpClient: HttpClient) { }

  post(cartData: CartCalc): Observable<CartCalc> {
    return this.httpClient.post<CartCalc>(this.getUrl(), cartData);
  }

  getUrl() {
    switch (window.location.hostname) {
      case 'localhost':
        return "http://localhost:3001/api/cartCalc";
      default:
        return "";
    }
  }
}
