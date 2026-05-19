// Archivo con errores intencionales para la actividad "Caza errores".

// ERROR 12: falta cerrar la cadena de texto. Esto rompe todo el JavaScript.
const nombreBar = "Origen Bar de Autor";

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

function reservarMesa() {
  const reservas = document.getElementById("reservas");
  reservas.scrollIntoView({ behavior: "smooth" });
}

const form = document.getElementById("reservationForm");
const mensaje = document.getElementById("mensajeReserva");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const personas = Number(document.getElementById("personas").value);
  const fecha = document.getElementById("fecha").value;

  if (nombre.length < 3) {
    mensaje.textContent = "Escribe un nombre válido.";
    return;
  }

  if (!/^3\d{9}$/.test(telefono)) {
    mensaje.textContent = "El teléfono debe iniciar por 3 y tener 10 dígitos.";
    return;
  }

  if (personas < 1 || personas > 8) {
    mensaje.textContent = "Solo aceptamos reservas entre 1 y 8 personas.";
    return;
  }

  if (!fecha) {
    mensaje.textContent = "Selecciona una fecha para la reserva.";
    return;
  }

  mensaje.textContent = `Reserva registrada para ${nombre}. Te contactaremos al ${telefono}.`;
  form.reset();
});
