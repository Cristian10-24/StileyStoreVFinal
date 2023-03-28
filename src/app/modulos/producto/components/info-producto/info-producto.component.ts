import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-info-producto',
  templateUrl: './info-producto.component.html',
  styleUrls: ['./info-producto.component.scss']
})
export class InfoProductoComponent implements OnInit{
  product:Product[]=[]
  id:string | null;
  constructor(private productServices : ProductService,
              private aRoute : ActivatedRoute){
    this.id = this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.obtenerProducto();
  }

  obtenerProducto(){
    if(this.id !== null){
      this.productServices.obtenerProducto(this.id).subscribe((data)=>{
      return this.product.push(data);
      })
    }
  }
  addToCart(product:Product){
    return this.productServices.addProduct(product);
  }
}
