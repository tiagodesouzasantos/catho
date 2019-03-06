import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private httpClient: HttpClient) { }

  get():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.getUrl());
  }
  
  getUrl() {
    switch (window.location.hostname) {
      case 'localhost':
        return "http://localhost:3001/api/product";
      default:
        return "";
    }
  }
}
