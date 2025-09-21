document.addEventListener("DOMContentLoaded", () => {
  // 📊 Gráfico de barras: Ventas por tipo de mueble
  const barrasCtx = document.getElementById("tendenciasChart").getContext("2d");

  new Chart(barrasCtx, {
    type: "bar",
    data: {
      labels: ["Silla", "Escritorio", "Repisas", "Tocador", "Organizador"],
      datasets: [{
        label: "Unidades vendidas (Últimos 3 meses)",
        data: [180, 140, 90, 75, 65],
        backgroundColor: "#167caf"
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // 🍕 Gráfico de pizza: Distribución de categorías
  const pizzaCtx = document.getElementById("ventasChart").getContext("2d");

  new Chart(pizzaCtx, {
    type: "pie",
    data: {
      labels: ["Sala", "Oficina", "Dormitorio", "Comedor", "Exterior"],
      datasets: [{
        label: "Distribución",
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          "#167caf",
          "#66a6d9",
          "#90cdf4",
          "#d1e9ff",
          "#f2f2f2"
        ]
      }]
    },
    options: {
      responsive: true
    }
  });

  // 🗓️ Mostrar fecha actual
  const hoy = new Date();
  const fechaFormateada = hoy.toLocaleDateString("es-PE", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  document.getElementById("fecha-actual").textContent = fechaFormateada;
});
