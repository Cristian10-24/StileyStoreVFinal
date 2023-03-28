import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  viewCart:boolean=false;
  constructor(private productServices : ProductService) {}

  cantUnits(){
    const cantUnits = this.productServices.unitsTotal;
    return cantUnits;
  }
  onToggleCart(){
    this.viewCart = !this.viewCart
  }
}
