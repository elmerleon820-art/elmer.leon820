const paginas = document.querySelectorAll(".pagina");
let paginaActual = 0;

function cambiarPagina() {
  paginas[paginaActual].classList.remove("activa");

  paginaActual++;

  if (paginaActual >= paginas.length) {
    paginaActual = 0;
  }

  paginas[paginaActual].classList.add("activa");
}

function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.innerHTML = "❤";

  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.fontSize = 16 + Math.random() * 30 + "px";
  corazon.style.animationDuration = 5 + Math.random() * 5 + "s";

  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 10000);
}

setInterval(crearCorazon, 300);