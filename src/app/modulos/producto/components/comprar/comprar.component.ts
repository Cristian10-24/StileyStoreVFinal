import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit{
  constructor(private productServices : ProductService){}
  ngOnInit(): void {
      this.valorApagar();
  }
  valorApagar(){
    return this.productServices.totalCart();
  }
}
