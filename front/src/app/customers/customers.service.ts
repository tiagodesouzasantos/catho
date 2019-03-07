import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customers } from './customers';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  static addedCustomerEmitter = new EventEmitter<Customers>();
  static customer: Customers = {};

  constructor(private httpClient: HttpClient) { }

  selectCustomer(customer: Customers){
    CustomersService.customer = customer;
    CustomersService.addedCustomerEmitter.emit(customer);
  }

  get(): Observable<Customers[]> {
    return this.httpClient.get<Customers[]>(this.getUrl());
  }

  getUrl() {
    switch (window.location.hostname) {
      case 'localhost':
        return "http://localhost:3001/api/customer";
      default:
        return "";
    }
  }
}
