import { Component } from '@angular/core';

interface color {
  value:string;
  viewValue:string;

 
}
interface talla {
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  color: color[] = [
    {value:'amarillo',viewValue:'amarillo'},
    {value:'verde',viewValue:'verde'},
    {value:'rojo',viewValue:'rojo'},
    {value:'negro',viewValue:'negro'},
  ]; 
  talla: talla[] = [
    {value:'m', viewValue:'M'},
    {value:'s',viewValue:'S'},
    {value:'l',viewValue:'L'},
    {value:'xl',viewValue:'xl'}


  ];
}
