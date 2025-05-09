import * as service from '../business/productService.js';

const form = document.getElementById('productForm');
const list = document.getElementById('productList');
let editIndex = null;

function render() {
  list.innerHTML = '';
  const productos = service.getAllProducts();
  productos.forEach((p, i) => {
    const li = document.createElement('li');
    li.textContent = `${p.nombre} - ${p.descripcion} ($${p.precio.toFixed(2)})`;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Editar';
    editBtn.onclick = () => {
      document.getElementById('nombre').value = p.nombre;
      document.getElementById('descripcion').value = p.descripcion;
      document.getElementById('precio').value = p.precio;
      editIndex = i;
    };

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Eliminar';
    delBtn.onclick = () => {
      service.removeProduct(i);
      render();
    };

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

form.onsubmit = (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const descripcion = document.getElementById('descripcion').value;
  const precio = document.getElementById('precio').value;

  if (editIndex === null) {
    service.createProduct(nombre, descripcion, precio);
  } else {
    service.editProduct(editIndex, nombre, descripcion, precio);
    editIndex = null;
  }
  form.reset();
  render();
};

render();
