const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let ancho = canvas.width = window.innerWidth;
let alto = canvas.height = window.innerHeight;

const frases = [
  "GRACIAS",
  "POR EXISTIR",
  "TE AMO",
  "MI VIDA",
  "PIENSO EN TI"
];

let fraseActual = 0;
let particulas = [];
let estrellas = [];

window.addEventListener("resize", () => {
  ancho = canvas.width = window.innerWidth;
  alto = canvas.height = window.innerHeight;
  crearTexto(frases[fraseActual]);
  crearEstrellas();
});

class Particula {
  constructor(x, y, destinoX, destinoY) {
    this.x = Math.random() * ancho;
    this.y = Math.random() * alto;
    this.destinoX = destinoX;
    this.destinoY = destinoY;
    this.size = Math.random() * 2.2 + 1;
    this.velocidad = Math.random() * 0.045 + 0.025;
    this.alpha = Math.random() * 0.8 + 0.2;
    this.color = `rgba(255, ${40 + Math.random() * 80}, ${150 + Math.random() * 80}, ${this.alpha})`;
  }

  actualizar() {
    this.x += (this.destinoX - this.x) * this.velocidad;
    this.y += (this.destinoY - this.y) * this.velocidad;
  }

  dibujar() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#ff2f91";
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  dispersar() {
    this.destinoX = Math.random() * ancho;
    this.destinoY = Math.random() * alto;
  }
}

class Estrella {
  constructor() {
    this.x = Math.random() * ancho;
    this.y = Math.random() * alto;
    this.size = Math.random() * 1.5;
    this.alpha = Math.random();
    this.velocidad = Math.random() * 0.02 + 0.005;
  }

  actualizar() {
    this.alpha += this.velocidad;

    if (this.alpha > 1 || this.alpha < 0.15) {
      this.velocidad *= -1;
    }
  }

  dibujar() {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 120, 200, ${this.alpha})`;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#ff4fa3";
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function crearEstrellas() {
  estrellas = [];

  for (let i = 0; i < 120; i++) {
    estrellas.push(new Estrella());
  }
}

function crearTexto(texto) {
  particulas = [];

  const canvasTexto = document.createElement("canvas");
  const ctxTexto = canvasTexto.getContext("2d");

  canvasTexto.width = ancho;
  canvasTexto.height = alto;

  let tamanoFuente = ancho < 600 ? 45 : 90;

  ctxTexto.fillStyle = "white";
  ctxTexto.font = `bold ${tamanoFuente}px Arial`;
  ctxTexto.textAlign = "center";
  ctxTexto.textBaseline = "middle";

  ctxTexto.fillText(texto, ancho / 2, alto / 2);

  const datos = ctxTexto.getImageData(0, 0, ancho, alto).data;

  for (let y = 0; y < alto; y += 5) {
    for (let x = 0; x < ancho; x += 5) {
      const index = (y * ancho + x) * 4;

      if (datos[index + 3] > 128) {
        particulas.push(new Particula(x, y, x, y));
      }
    }
  }
}

function cambiarTextoAutomatico() {
  particulas.forEach(p => p.dispersar());

  setTimeout(() => {
    fraseActual++;

    if (fraseActual >= frases.length) {
      fraseActual = 0;
    }

    crearTexto(frases[fraseActual]);
  }, 900);
}

function siguienteTexto() {
  cambiarTextoAutomatico();
}

function animar() {
  ctx.clearRect(0, 0, ancho, alto);

  const fondo = ctx.createRadialGradient(
    ancho / 2,
    alto / 2,
    50,
    ancho / 2,
    alto / 2,
    ancho
  );

  fondo.addColorStop(0, "#150014");
  fondo.addColorStop(0.45, "#070010");
  fondo.addColorStop(1, "#000000");

  ctx.fillStyle = fondo;
  ctx.fillRect(0, 0, ancho, alto);

  estrellas.forEach(estrella => {
    estrella.actualizar();
    estrella.dibujar();
  });

  particulas.forEach(particula => {
    particula.actualizar();
    particula.dibujar();
  });

  requestAnimationFrame(animar);
}

crearEstrellas();
crearTexto(frases[fraseActual]);
animar();

setInterval(cambiarTextoAutomatico, 4500);
function activarMusica() {
  const musica = document.getElementById("musicaFondo");
  musica.volume = 0.35;
  musica.play();
}