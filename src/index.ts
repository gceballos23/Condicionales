let valorProducto: number = 500;
let cantidad: number = 5;

if (cantidad * valorProducto > 1000) {
  console.log("Precio con Descuento", cantidad * valorProducto * 0.9);
} else {
  console.log("Precion sin Descuento", cantidad * valorProducto);
}
