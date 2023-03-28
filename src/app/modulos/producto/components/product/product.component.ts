import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  products:Product[]=[]; 
  constructor(private productService : ProductService){}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getAllProducts().subscribe((data)=>
    {
      return this.products = data;
    })
  }
  addToCart(product:Product){
    return this.productService.addProduct(product);
  }
}
