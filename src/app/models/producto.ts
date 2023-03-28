export interface Producto{
    producto: string;
    referencia: string;
    categoria: string;
    nombre: string;
    estado: string;
    stock: string;
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
