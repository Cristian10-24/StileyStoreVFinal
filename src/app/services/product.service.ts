import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Url = 'https://api.escuelajs.co/api/v1/products/';
  
  // listar carrito
  private listProducts:Product[]=[];
  public listProductsToBuy:Product[]=[];
  // carrito observable
  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  unitsTotal:number = 0;
  total:number = 0;
  
  constructor(private httpClient : HttpClient) { }

  getAllProducts():Observable<Product[]>{
    const response = this.httpClient.get<Product[]>(this.Url)
    return response;
  }
  obtenerProducto(id:string):Observable<any>{
    return this.httpClient.get(this.Url + id);
  }
  addProduct(product:Product){
    if(this.listProducts.length === 0){
      product.cantidad = 1;
      this.listProducts.push(product);
      this.myCart.next(this.listProducts);
      this.unitsTotal = this.listProducts.length;
    }else{
      const productMod = this.listProducts.find((element)=>{
        return element.id === product.id
      })
      if(productMod){
        productMod.cantidad = productMod.cantidad + 1
        this.myCart.next(this.listProducts);
      }else{
        product.cantidad = 1;
        this.listProducts.push(product);
        this.myCart.next(this.listProducts);
        this.unitsTotal = this.listProducts.length;
      }
    }
  }
  deleteProduct(id:string){
    this.listProducts = this.listProducts.filter((product)=>{
      return product.id != id
    })
    this.myCart.next(this.listProducts);
    this.unitsTotal = this.listProducts.length;
  }
  findProductById(id:string){
    return this.listProducts.find((element)=>{
    return element.id === id;
    })
  }
  totalCart(){
    const total = this.listProducts.reduce(function (acc, product){return acc + (product.cantidad*product.price);},0)
    return total;
  }

  selectProductTobuy(){
    if(this.listProducts.length > 0){
      this.listProductsToBuy = this.listProducts;
      console.log(this.listProductsToBuy);
      return this.listProductsToBuy;
    }
    else{
      return false;
    }
  }
}
