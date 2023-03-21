import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent {

  listProductos: Producto[] = [];

  displayedColumns: string[] = ['producto', 'referencia', 'categoria', 'nombre', 'estado', 'stock', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _productoService: ProductoService){

  }
  ngOnInit(): void {
    this.cargarProducto();
  }

  cargarProducto(){
    this.listProductos = this._productoService.getProductos();
    this.dataSource = new MatTableDataSource(this.listProductos);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /* eliminarProducto(index: number){
    console.log(index);

    this._productoService.eliminarProducto(index);
    this.cargarProducto();

    this._snackbar.open('Usuario eliminado con exito', 'Se fue :(',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  } */
}
