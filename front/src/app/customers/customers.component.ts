import { Component, OnInit, Input } from '@angular/core';
import { CustomersService } from './customers.service';
import { Customers } from './customers';

@Component({
  selector: 'customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  @Input() customerList: Customers[] = [];

  constructor(private customerService: CustomersService) {
    let _this = this;
    this.customerService.get().subscribe(customers => {
      _this.customerList = customers;
    });
  }

  ngOnInit() {
  }

  onChangeSelect(_id:number){
    let [customer] = this.customerList.filter(customer=>{
      return customer.id==_id?true:false;
    });
    this.customerService.selectCustomer(customer);
  }
}
