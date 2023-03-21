export interface Producto{
    producto: number;
    referencia: ReferenciaProducto;
    categoria: CategoriaProducto;
    nombre: string;
    estado: string;
    stock: number;
}
export interface ReferenciaProducto{
    referencia: number;
    precio: number;
    imagen: string;
    color: string;
    talla: string;
    tela: string;
    cantidad: number;
    descripcion: string;
}

export interface CategoriaProducto{
    categoria: number;
    nombreCategoria: string;
    descripcionCategoria: string;
}