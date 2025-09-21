// Este script básico muestra un mensaje cuando se hace clic en un producto
document.addEventListener("DOMContentLoaded", () => {
  const productos = document.querySelectorAll(".producto");

  productos.forEach(producto => {
    producto.addEventListener("click", () => {
      const nombre = producto.querySelector("h4").textContent;
      alert(`Has seleccionado: ${nombre}`);
    });
  });
});


// Cargar productos desde productos.json
fetch("productos.json")
  .then(res => res.json())
  .then(productos => {
    const contenedor = document.getElementById("contenedor-productos");

    productos.forEach(p => {
      const card = document.createElement("div");
      card.classList.add("producto");

      card.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}">
        <h4>${p.nombre}</h4>
        <div class="producto-info">
          <p>S/. ${p.precio}</p>
          <button class="btn-carrito">Agregar al carrito</button>
        </div>
      `;

      // Evento individual para el botón de cada producto
      card.querySelector(".btn-carrito").addEventListener("click", () => {
        alert(`Has agregado: ${p.nombre} al carrito`);
      });

      contenedor.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error al cargar los productos:", error);

    // --- SLIDER AUTOMÁTICO DE IMÁGENES ---
const slides = document.querySelectorAll(".slide");
let indice = 0;

setInterval(() => {
  slides[indice].classList.remove("activa");
  indice = (indice + 1) % slides.length;
  slides[indice].classList.add("activa");
}, 5000);
    

  });
