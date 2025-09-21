document.addEventListener("DOMContentLoaded", () => {
  // Simulación de datos
// Cargar ventas guardadas o inicializar con datos de prueba solo si no hay nada guardado
let ventas = JSON.parse(localStorage.getItem("ventas"));

if (!ventas || ventas.length === 0) {
  ventas = [
    { fecha: "2025-06-01", producto: "Mesa Roble", cantidad: 2, total: 1800 },
    { fecha: "2025-06-03", producto: "Silla Tapizada", cantidad: 4, total: 800 },
    { fecha: "2025-06-05", producto: "Armario Pino", cantidad: 1, total: 950 },
    { fecha: "2025-06-06", producto: "Comedor Vintage", cantidad: 3, total: 2700 },
    { fecha: "2025-06-07", producto: "Sofá Modular", cantidad: 2, total: 2100 }
  ];
  localStorage.setItem("ventas", JSON.stringify(ventas));
}


const compras = [
  { proveedor: "Maderas Andinas", producto: "Tableros MDF", cantidad: 50, fecha: "2025-05-30" },
  { proveedor: "Herrería Tacna", producto: "Perfiles metálicos", cantidad: 100, fecha: "2025-06-01" },
  { proveedor: "Fábrica CueroPro", producto: "Tela y cuero sintético", cantidad: 30, fecha: "2025-06-02" },
  { proveedor: "Clavos del Sur", producto: "Herrajes y tornillos", cantidad: 500, fecha: "2025-06-03" },
  { proveedor: "Pinturas Norte", producto: "Barnices y selladores", cantidad: 25, fecha: "2025-06-04" }
];

const inventario = [
  { codigo: "INV001", producto: "Mesa Roble", categoria: "Comedor", cantidad: 10, stockMinimo: 2, ubicacion: "Depósito A" },
  { codigo: "INV002", producto: "Silla Tapizada", categoria: "Sala", cantidad: 25, stockMinimo: 8, ubicacion: "Depósito B" },
  { codigo: "INV003", producto: "Estante Blanco", categoria: "Oficina", cantidad: 5, stockMinimo: 2, ubicacion: "Depósito A" },
  { codigo: "INV004", producto: "Sofá Modular", categoria: "Sala", cantidad: 3, stockMinimo: 1, ubicacion: "Depósito C" },
  { codigo: "INV005", producto: "Armario Clásico", categoria: "Dormitorio", cantidad: 6, stockMinimo: 3, ubicacion: "Depósito B" }
];

const proveedores = [
  { empresa: "Maderas Andinas", contacto: "Jorge Córdova", telefono: "989112233", email: "jorge@andinas.com", rubro: "Maderas" },
  { empresa: "MetalTech", contacto: "Karina Silva", telefono: "978445512", email: "karina@metaltech.com", rubro: "Metales" },
  { empresa: "EcoPint", contacto: "Luis Arce", telefono: "923448877", email: "luis@ecopint.com", rubro: "Pinturas" },
  { empresa: "Sillones Lima", contacto: "Patricia Vega", telefono: "991234578", email: "patricia@silloneslima.com", rubro: "Tapicería" },
  { empresa: "Fittings SAC", contacto: "Sandro Ruiz", telefono: "915344678", email: "sandro@fittings.com", rubro: "Ferretería" }
];

const trabajadores = [
  { nombre: "José Palomino", dni: "45678123", cargo: "Jefe de Almacén", area: "Logística", telefono: "911223344" },
  { nombre: "Rosa Tejada", dni: "47890123", cargo: "Supervisora", area: "Producción", telefono: "912334455" },
  { nombre: "Pedro Ramos", dni: "48901234", cargo: "Diseñador", area: "Diseño", telefono: "913445566" },
  { nombre: "Ana Gutiérrez", dni: "49012345", cargo: "Vendedora", area: "Ventas", telefono: "914556677" },
  { nombre: "Luis Mendoza", dni: "50123456", cargo: "Chofer", area: "Distribución", telefono: "915667788" }
];

  // Insertar ventas
const tablaVentas = document.getElementById("tablaVentas");
ventas.forEach(v => {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${v.fecha}</td>
    <td>${v.producto}</td>
    <td>${v.cantidad}</td>
    <td>S/. ${v.total}</td>
  `;
  tablaVentas.appendChild(fila);
});

const tablaCompras = document.getElementById("tablaCompras");
compras.forEach(c => {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${c.proveedor}</td>
    <td>${c.producto}</td>
    <td>${c.cantidad}</td>
    <td>${c.fecha}</td>
  `;
  tablaCompras.appendChild(fila);
});

function guardarEnStorageVenta(nuevaVenta) {
  const ventas = JSON.parse(localStorage.getItem("ventas")) || [];
  ventas.push(nuevaVenta);
  localStorage.setItem("ventas", JSON.stringify(ventas));
}

document.addEventListener("DOMContentLoaded", () => {
  const ventasGuardadas = JSON.parse(localStorage.getItem("ventas")) || [];

  ventasGuardadas.forEach(v => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${v.fecha}</td>
      <td>${v.producto}</td>
      <td>${v.cantidad}</td>
      <td>S/. ${v.total}</td>
    `;
    document.getElementById("tablaVentas").appendChild(fila);
  });
});

  // Inventario
const tablaAlmacen = document.getElementById("tablaAlmacen");
inventario.forEach(item => {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${item.codigo}</td>
    <td>${item.producto}</td>
    <td>${item.categoria}</td>
    <td>${item.cantidad}</td>
    <td>${item.stockMinimo}</td>
    <td>${item.ubicacion}</td>
  `;
  tablaAlmacen.appendChild(fila);
});

const tablaProveedores = document.getElementById("tablaProveedores");
proveedores.forEach((p, index) => {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${index + 1}</td>
    <td>${p.empresa}</td>
    <td>${p.contacto}</td>
    <td>${p.telefono}</td>
    <td>${p.email}</td>
    <td>${p.rubro}</td>
  `;
  tablaProveedores.appendChild(fila);
});

  // Trabajadores
const tablaTrabajadores = document.getElementById("tablaTrabajadores");
trabajadores.forEach((t, index) => {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${index + 1}</td>
    <td>${t.nombre}</td>
    <td>${t.dni}</td>
    <td>${t.cargo}</td>
    <td>${t.area}</td>
    <td>${t.telefono}</td>
  `;
  tablaTrabajadores.appendChild(fila);

});

const modal = document.getElementById("modalVenta");
const btnAbrir = document.getElementById("btnAgregarVenta");
const btnCerrar = modal.querySelector(".cerrar");
const formulario = document.getElementById("formVenta");

// Mostrar modal
btnAbrir.addEventListener("click", () => {
  modal.style.display = "block";
});

// Cerrar modal
btnCerrar.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

function agregarFilaVenta(v) {
  const tablaVentas = document.getElementById("tablaVentas");

  const fila = document.createElement("tr");
  fila.classList.add("fade-in");
  fila.innerHTML = `
    <td>${v.fecha}</td>
    <td>${v.producto}</td>
    <td>${v.cantidad}</td>
    <td>S/. ${v.total}</td>
  `;
  tablaVentas.appendChild(fila);
}

// Agregar venta desde formulario
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const fecha = document.getElementById("fechaVenta").value;
  const producto = document.getElementById("productoVenta").value.trim();
  const cantidad = parseInt(document.getElementById("cantidadVenta").value);
  const total = parseFloat(document.getElementById("totalVenta").value);

  if (!fecha || !producto || isNaN(cantidad) || isNaN(total)) {
    alert("Completa todos los campos.");
    return;
  }

  const nuevaVenta = { fecha, producto, cantidad, total };
  agregarFilaVenta(nuevaVenta);
  guardarEnStorageVenta(nuevaVenta);

  modal.style.display = "none"; // Cierra el modal
  this.reset(); // Limpia el formulario
});
//ELIMINAR FILA VENTAS
// Paso 1: Detectar clic en fila para seleccionarla
let filaSeleccionada = null;

document.getElementById("tablaVentas").addEventListener("click", function (e) {
  const fila = e.target.closest("tr");

  // Elimina selección anterior
  if (filaSeleccionada) filaSeleccionada.classList.remove("seleccionada");

  // Marca nueva fila
  fila.classList.add("seleccionada");
  filaSeleccionada = fila;
});
// Paso 2: Eliminar fila seleccionada al hacer clic en el botón
document.getElementById("btnEliminarVenta").addEventListener("click", () => {
  if (!filaSeleccionada) {
    alert("Selecciona una fila primero.");
    return;
  }

  const confirmacion = confirm("¿Estás seguro de eliminar esta venta?");
  if (confirmacion) {
    filaSeleccionada.remove();
    filaSeleccionada = null;
  }
});
//EDITAR FILA VENTAS
const modalEditar = document.getElementById("modalEditar");
const formEditar = document.getElementById("formEditarVenta");
const cerrarEditar = document.getElementById("cerrarEditar");

let filaEditando = null;

// Abrir modal con los valores de la fila seleccionada
document.getElementById("btnEditarVenta").addEventListener("click", () => {
  if (!filaSeleccionada) {
    alert("Selecciona una fila primero.");
    return;
  }

  // Guardar referencia de la fila actual
  filaEditando = filaSeleccionada;
  const celdas = filaEditando.querySelectorAll("td");

  // Cargar datos en el formulario
  document.getElementById("editFecha").value = celdas[0].textContent;
  document.getElementById("editProducto").value = celdas[1].textContent;
  document.getElementById("editCantidad").value = parseInt(celdas[2].textContent);
  document.getElementById("editTotal").value = parseFloat(celdas[3].textContent.replace("S/.", "").trim());

  modalEditar.style.display = "block";
});

// Cerrar modal
cerrarEditar.addEventListener("click", () => modalEditar.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === modalEditar) modalEditar.style.display = "none";
});

formEditar.addEventListener("submit", function (e) {
  e.preventDefault();

  const nuevaFecha = document.getElementById("editFecha").value;
  const nuevoProducto = document.getElementById("editProducto").value.trim();
  const nuevaCantidad = parseInt(document.getElementById("editCantidad").value);
  const nuevoTotal = parseFloat(document.getElementById("editTotal").value);

  if (!nuevaFecha || !nuevoProducto || isNaN(nuevaCantidad) || isNaN(nuevoTotal)) {
    alert("Completa todos los campos correctamente.");
    return;
  }

  // Actualiza los <td> de la fila seleccionada
  const celdas = filaEditando.querySelectorAll("td");
  celdas[0].textContent = nuevaFecha;
  celdas[1].textContent = nuevoProducto;
  celdas[2].textContent = nuevaCantidad;
  celdas[3].textContent = `S/. ${nuevoTotal}`;

  // Cierra y limpia el formulario
  modalEditar.style.display = "none";
  this.reset();
});

filaEditando.classList.add("editado");
setTimeout(() => filaEditando.classList.remove("editado"), 1500);

//EXPORTAR VENTAS



//-------------------------------------------------------------
//Clientes
document.addEventListener('DOMContentLoaded', function() {
    const tabla = document.getElementById('tablaClientes');
    tabla.innerHTML = ''; // Limpiar tabla

    // Leer usuarios de localStorage
    const usuariosJSON = localStorage.getItem('usuarios');
    if (!usuariosJSON) {
      tabla.innerHTML = '<tr><td colspan="6">No hay usuarios registrados</td></tr>';
      return;
    }

    const usuarios = JSON.parse(usuariosJSON);

    if (usuarios.length === 0) {
      tabla.innerHTML = '<tr><td colspan="6">No hay usuarios registrados</td></tr>';
      return;
    }

    usuarios.forEach((usuario, index) => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${index + 1}</td>
        <td>${usuario.nombre}</td>
        <td>${usuario.apellido}</td>
        <td>${usuario.email}</td>
        <td>${usuario.celular}</td>
        <td>${usuario.edad}</td>
      `;
      tabla.appendChild(fila);
    });
  });

  });

