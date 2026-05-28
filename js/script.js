const paginas = [
  {
    tituloIzquierda: "Mi librito especial",
    textoIzquierda: "Un pequeño detalle hecho con mucho cariño a mi reina.",
    mensajeDerecha: "Bienvenida a mi corazon lo que siento por ti 💖",
    fraseIzquierda: "MI CARÁTULA Favorita",
    fraseDerecha: "FOR YOU",
    portada: true
  },
  {
    tituloIzquierda: "En mi corazoncito<br>solo estás",
    textoIzquierda: "Quedate porque contigo siendo mas con calma todo",
    mensajeDerecha: "Te elijo a ti para amarte en silencio pero con lealtad <3",
    fraseIzquierda: "Te adoro mas de lo que siente mi corazon",
    fraseDerecha: "I LOVE YOU",
    portada: false
  },
  {
    tituloIzquierda: "Capítulo 2",
    textoIzquierda: "Hay personas que llegan suavecito y hacen que todo se sienta mejor.",
    mensajeDerecha: "Me gusta la paz que tengo,pero mas me gusta el amor que siento ante ti 💖",
    fraseIzquierda: "Cariño mio",
    fraseDerecha: "MI ESTRELLA",
    portada: true
  },
  {
    tituloIzquierda: "Capítulo 3",
    textoIzquierda: "El cariño verdadero se nota en los detalles pequeños.",
    mensajeDerecha: "En español te digo que te amo,pero en ingles te digo To love you is to promise to love you despite everything",
    fraseIzquierda: "Te siento en mi corazon",
    fraseDerecha: "MY STAR",
    portada: true
  },
  {
    tituloIzquierda: "Capítulo 4",
    textoIzquierda: "Quererte no se siente facil pero si real cuando te amo mas.",
    mensajeDerecha: "El amor que tengo te acompaña en los dias oscuros pero en tu corazon hay dia bellos✨",
    fraseIzquierda: "Que bella sonrisa la amo mucho",
    fraseDerecha: "MY LIGHT OF HOPE",
    portada: true
  },
  {
    tituloIzquierda: "Capítulo 5",
    textoIzquierda: "Tu amor vale mas que cualquier historia mas perfecta del amor .",
    mensajeDerecha: "Te sigo amando no es facil pero prometo no soltar la mano de mi corazon",
    fraseIzquierda: "Amo tus perfectos ojitos ",
    fraseDerecha: "MY TREASURE",
    portada: true
  },
  {
    tituloIzquierda: "Capítulo 6",
    textoIzquierda: "Cada momento que te pienso es dificilmente que podria explicar.",
    mensajeDerecha: "Haz cruzado por mi mente solo 1 vez desde que me enamore de ti ",
    fraseIzquierda: "Contigo escribo poesias unicas",
    fraseDerecha: "Mi cielo",
    portada: true
  },
  {
    tituloIzquierda: "Capítulo 7",
    textoIzquierda: "Las veces que te comprendi siempre supe que te ame mucho .",
    mensajeDerecha: "Si algun dia lees esto entenderas el porque nunca te dejo de amar",
    fraseIzquierda: "Te extraño pero el amor lo supera",
    fraseDerecha: "MY HEART",
    portada: true
  },
  {
    tituloIzquierda: "Capítulo 8",
    textoIzquierda: "Mientras viva te escogeria millones de veces como las millones de veces que me enamoras.",
    mensajeDerecha: "Estoy agradeciendo de haberme enamorado de ti,disfruto cada bello ritmo de mi corazon",
    fraseIzquierda: "Tienes la figura perfecta del amor",
    fraseDerecha: "SUCH A UNIQUE GIRL",
    portada: true
  },
  {
    tituloIzquierda: "Final",
    textoIzquierda: "Te prometo que te voy a elegir en los dias que no nos entendamos.",
    mensajeDerecha: "Anoche volvi a soñar contigo,que lindo es volver a conversar una vez mas contigo 💌",
    fraseIzquierda: "Amo cada pagina de amor que siento en ti",
    fraseDerecha: "I love",
    portada: true
  }
];

let pagina = 0;

const tituloIzquierda = document.getElementById("tituloIzquierda");
const textoIzquierda = document.getElementById("textoIzquierda");
const mensajePagina = document.getElementById("mensajePagina");
const numeroPagina = document.getElementById("numeroPagina");
const fraseIzquierda = document.getElementById("fraseIzquierda");
const fraseDerecha = document.getElementById("fraseDerecha");
const tarjeta = document.querySelector(".tarjeta");
const imagenPortada = document.getElementById("imagenPortada");

function actualizarLibro() {
  const actual = paginas[pagina];

  tituloIzquierda.innerHTML = actual.tituloIzquierda;
  textoIzquierda.innerHTML = actual.textoIzquierda;
  mensajePagina.innerHTML = actual.mensajeDerecha;
  fraseIzquierda.innerHTML = actual.fraseIzquierda;
  fraseDerecha.innerHTML = actual.fraseDerecha;
  numeroPagina.innerHTML = pagina + 1;

  if (actual.portada) {
    imagenPortada.style.display = "block";
    tarjeta.classList.remove("texto-corazon-tu");
  } else {
    imagenPortada.style.display = "none";
    tarjeta.classList.add("texto-corazon-tu");
  }

  document.querySelectorAll(".pagina").forEach(p => {
    p.classList.remove("animar");
    void p.offsetWidth;
    p.classList.add("animar");
  });
}

function paginaSiguiente() {
  pagina++;

  if (pagina >= paginas.length) {
    pagina = 0;
  }

  actualizarLibro();
}

function paginaAnterior() {
  pagina--;

  if (pagina < 0) {
    pagina = paginas.length - 1;
  }

  actualizarLibro();
}

function crearCorazonFondo() {
  const c = document.createElement("div");
  c.className = "corazon-fondo";
  c.innerHTML = "❤";

  c.style.left = Math.random() * 100 + "vw";
  c.style.fontSize = 12 + Math.random() * 25 + "px";
  c.style.animationDuration = 5 + Math.random() * 5 + "s";

  document.body.appendChild(c);

  setTimeout(() => {
    c.remove();
  }, 10000);
}

setInterval(crearCorazonFondo, 400);
actualizarLibro();
const musica = document.getElementById("musicaFondo");

window.addEventListener("load", () => {
  musica.volume = 0.35;

  const intento = musica.play();

  if (intento !== undefined) {
    intento.catch(() => {
      console.log("El navegador bloqueó la música automática. Usa el botón.");
    });
  }
});

function activarMusica() {
  musica.volume = 0.35;
  musica.play();
}