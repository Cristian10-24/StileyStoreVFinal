import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  listProductos: Producto[] = [
    {producto: '01', categoria: '02', referencia: '3', nombre: 'Pijama', estado: 'Disponible', stock: '10'},
    {producto: '01', categoria: '02', referencia: '3', nombre: 'Gorra', estado: 'Disponible', stock: '10'},
    {producto: '01', categoria: '02', referencia: '3', nombre: 'Pijama', estado: 'Disponible', stock: '10'},
    {producto: '01', categoria: '02', referencia: '3', nombre: 'Pijama', estado: 'Disponible', stock: '10'},

    

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
