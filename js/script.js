function abrirCarta() {
  const mensaje = document.getElementById("mensaje");
  mensaje.style.display = "block";
  explosionCorazones();
}

function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.innerHTML = "❤";

  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.fontSize = 16 + Math.random() * 32 + "px";
  corazon.style.animationDuration = 5 + Math.random() * 6 + "s";

  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 11000);
}

function crearBrillo() {
  const brillo = document.createElement("div");
  brillo.classList.add("brillo");

  brillo.style.left = Math.random() * 100 + "vw";
  brillo.style.top = Math.random() * 100 + "vh";
  brillo.style.animationDuration = 1 + Math.random() * 2 + "s";

  document.body.appendChild(brillo);

  setTimeout(() => {
    brillo.remove();
  }, 4000);
}

function explosionCorazones() {
  for (let i = 0; i < 24; i++) {
    const heart = document.createElement("div");
    heart.classList.add("explosion");
    heart.innerHTML = "❤";

    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.setProperty("--x", `${Math.random() * 320 - 160}px`);
    heart.style.setProperty("--y", `${Math.random() * 320 - 160}px`);

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  }
}

setInterval(crearCorazon, 350);
setInterval(crearBrillo, 250);