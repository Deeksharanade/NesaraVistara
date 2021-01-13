import { Component, OnInit } from '@angular/core';
class Product{
  name: string;
}
class Another{
  row:string;
}
class Invoice{
  customerName: string;
  products: Product[] = [];
anothers:Another[]=[];
 
  constructor(){
    this.products.push(new Product());
    this.anothers.push(new Another() );
    
  }}
@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  
  
  fee1; fee2; fee3; code; total;
  constructor() { }

  ngOnInit(): void {
  }
  onEnter1() { 
    this.total=(this.fee1 + this.fee2 + this.fee3 );
    }
  invoice = new Invoice(); 
  addProduct(){
    this.invoice.products.push(new Product());
  }
  addAnother(){
this.invoice.anothers.push(new Another() );
  }

}
