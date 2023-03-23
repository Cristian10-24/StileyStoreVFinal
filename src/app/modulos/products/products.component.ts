import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productsList : any;
  constructor(private api : ProductoService) { }

  ngOnInit(): void {
  }
}
