document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggle-registro");
  const form = document.getElementById("registro-form");

  btn.addEventListener("click", () => {
    if (!form) {
      alert("Formulario no encontrado. ¿Está bien cargado el HTML?");
      return;
    }

    form.style.display = form.style.display === "none" ? "block" : "none";
  });

});

