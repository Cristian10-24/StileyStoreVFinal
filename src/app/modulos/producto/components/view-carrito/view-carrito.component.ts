import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-carrito',
  templateUrl: './view-carrito.component.html',
  styleUrls: ['./view-carrito.component.scss']
})
export class ViewCarritoComponent {
  myCart$ = this.productServices.myCart$
  botonDeshabilitado = true;
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
  cantUnits(){
    const cantUnits = this.productServices.unitsTotal;
    let message;
    if(cantUnits === 0){
      message = "No hay productos para mostrar";
      this.botonDeshabilitado = true;
    }else{
      this.botonDeshabilitado = false;
    }
    return message;
  }
  cantidadUnidades(){
    const cantidad = this.productServices.unitsTotal;
    return cantidad;
  }
  obtenerProductos(){
    return this.productServices.selectProductTobuy();
  }

}
