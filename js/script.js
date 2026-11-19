"use strict";

// PRODUCTOS FICTICIOS DE LA DEMO

const productos = [
  {
    id: "clasica",
    nombre: "Clásica Smash",
    descripcion:
      "Doble medallón smash, cheddar, pepinos y salsa de la casa en pan de papa.",
    precio: 8500,
    categoria: "hamburguesas",
    etiqueta: "La clásica",
    posicion: "0% 0%",
  },
  {
    id: "bacon",
    nombre: "Bacon Club",
    descripcion:
      "Doble smash, cheddar, panceta crocante y un toque de salsa barbacoa.",
    precio: 9800,
    categoria: "hamburguesas",
    etiqueta: "Para fans del bacon",
    posicion: "50% 0%",
  },
  {
    id: "triple",
    nombre: "Triple Cheese",
    descripcion:
      "Tres medallones smash, triple cheddar y cebolla grillada en pan de papa.",
    precio: 11200,
    categoria: "hamburguesas",
    etiqueta: "Sin vueltas",
    posicion: "100% 0%",
  },
  {
    id: "papas",
    nombre: "Papas clásicas",
    descripcion:
      "Papas doradas y crocantes con sal. El acompañamiento que nunca falla.",
    precio: 3500,
    categoria: "acompanamientos",
    etiqueta: "El match perfecto",
    posicion: "0% 100%",
  },
  {
    id: "papas-cheddar",
    nombre: "Papas con cheddar",
    descripcion:
      "Papas crocantes con salsa cheddar, panceta y verdeo.",
    precio: 4800,
    categoria: "acompanamientos",
    etiqueta: "Un extra de todo",
    posicion: "50% 100%",
  },
  {
    id: "gaseosa",
    nombre: "Gaseosa",
    descripcion:
      "Una bebida bien fría para acompañar tu pedido. Presentación de 354 ml.",
    precio: 2200,
    categoria: "bebidas",
    etiqueta: "Bien fría",
    posicion: "100% 100%",
  },
];

// ELEMENTOS DEL HTML

const contenedorProductos = document.querySelector("#productos");
const botonesCategorias = document.querySelectorAll(".categoria");

const formatoMoneda = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

// MOSTRAR LA CARTA

function mostrarProductos(categoria = "todos") {
  const filtrados =
    categoria === "todos"
      ? productos
      : productos.filter(
          (producto) => producto.categoria === categoria
        );

  contenedorProductos.innerHTML = filtrados
    .map(
      (producto) => `
        <article class="producto-card">
          <div
            class="producto-imagen"
            data-tipo="${producto.categoria}"
            style="background-position: ${producto.posicion};"
          >
            <span class="producto-etiqueta">
              ${producto.etiqueta}
            </span>
          </div>

          <div class="producto-info">
            <h3>${producto.nombre}</h3>

            <p>${producto.descripcion}</p>

            <div class="producto-footer">
              <span class="producto-precio">
                ${formatoMoneda.format(producto.precio)}
              </span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

// FILTRAR POR CATEGORÍA

botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", () => {
    botonesCategorias.forEach((categoria) => {
      categoria.setAttribute(
        "aria-pressed",
        String(categoria === boton)
      );
    });

    mostrarProductos(boton.dataset.categoria);
  });
});

// INICIO

mostrarProductos();