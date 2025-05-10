const STORAGE_KEY = 'productos';

function getAll() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveAll(productos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
}

export function addProduct(product) {
  const productos = getAll();
  productos.push(product);
  saveAll(productos);
}

export function updateProduct(index, updatedProduct) {
  const productos = getAll();
  productos[index] = updatedProduct;
  saveAll(productos);
}

export function deleteProduct(index) {
  const productos = getAll();
  productos.splice(index, 1);
  saveAll(productos);
}

export function getProducts() {
  return getAll();
}
