import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  myCart$ = this.productServices.myCart$

  constructor(private productServices : ProductService){}

  totalProduct(price:number,units:number){
    return price*units;
  }
  deleteProduct(id:string){
    this.productServices.deleteProduct(id);
  }
  updateUnits(operation:string, id:string){
    const product = this.productServices.findProductById(id);
    if (product){
      if(operation === 'minus' && product.cantidad>0){
        product.cantidad = product.cantidad - 1;
      }
      if(operation === 'plus'){
        product.cantidad = product.cantidad + 1;
      }
      if(product.cantidad === 0){
        this.deleteProduct(id);
      }
    }
  }
  totalCart(){
    const result = this.productServices.totalCart();
    return result;
  }
}
