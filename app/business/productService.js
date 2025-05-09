import * as repo from '../data/productRepository.js';

export function getAllProducts() {
  return repo.getProducts();
}

export function createProduct(nombre, descripcion, precio) {
  const product = { nombre, descripcion, precio: parseFloat(precio) };
  repo.addProduct(product);
}

export function editProduct(index, nombre, descripcion, precio) {
  const updated = { nombre, descripcion, precio: parseFloat(precio) };
  repo.updateProduct(index, updated);
}

export function removeProduct(index) {
  repo.deleteProduct(index);
}

