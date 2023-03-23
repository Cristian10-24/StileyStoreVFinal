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
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent {
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
