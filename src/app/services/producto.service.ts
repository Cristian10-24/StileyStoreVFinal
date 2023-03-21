import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  listProductos: Producto[] = [
    

  ]
  
  constructor() { }

  getProductos(){
    return this.listProductos.slice();
  }

  /* eliminarProducto(){
    this.listProductos.splice();
  } */

  /* agregarProducto(){
    this.listProductos.unshift(id_producto);
  } */
}
