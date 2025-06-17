let tipus = "";
let mides = {};

function mostrarOpcions() {
  mides.cintura = parseInt(document.getElementById("cintura").value);
  mides.cadera = parseInt(document.getElementById("cadera").value);

  if (isNaN(mides.cintura) || isNaN(mides.cadera)) {
    alert("Si us plau, introdueix valors vàlids per a cintura i cadera.");
    return;
  }

  document.getElementById("triar-peca").style.display = "block";
}

function seleccionar(peça) {
  tipus = peça;

  document.getElementById("faldilla-form").style.display = "none";
  document.getElementById("camisa-form").style.display = "none";

  if (peça === "faldilla") {
    document.getElementById("faldilla-form").style.display = "block";
  } else if (peça === "camisa") {
    document.getElementById("camisa-form").style.display = "block";
  }
}

function generarPatro(peça) {
  if (peça === "faldilla") {
    mides.llarg = parseInt(document.getElementById("llargFaldilla").value);
    if (isNaN(mides.llarg)) {
      alert("Introdueix un valor vàlid per al llarg de la faldilla.");
      return;
    }
  } else if (peça === "camisa") {
    mides.espatlles = parseInt(document.getElementById("espatlles").value);
    mides.pit = parseInt(document.getElementById("pit").value);
    mides.llarg = parseInt(document.getElementById("llargCamisa").value);

    if (isNaN(mides.espatlles) || isNaN(mides.pit) || isNaN(mides.llarg)) {
      alert("Introdueix valors vàlids per a la camisa.");
      return;
    }
  }

  const container = document.getElementById("canvas-container");
  container.innerHTML = ''; // Esborra el canvas anterior
  new p5(dibuixaPatro, container);
}

function dibuixaPatro(p) {
  p.setup = function () {
    const escala = 10;
    p.createCanvas(1300,1300);
    p.background(255);
    p.stroke(0);
    p.noFill();

    if (tipus === "faldilla") {
      const cintura = mides.cintura * escala;
      const cadera = mides.cadera * escala;
      const llarg = mides.llarg * escala;

   // Paràmetres comuns
const marge = 10;

// Peca frontal
p.line(marge, marge, marge, marge + llarg); // lateral esquerre
p.line(marge, marge + llarg, marge + cadera / 4 + escala, marge + llarg); // base
p.line(marge, marge, marge + cintura / 4 + 4 * escala, marge); // cintura
p.line(marge + cintura / 4 + 4 * escala, marge, marge + cadera / 4 + escala, marge + 18 * escala); // lateral corbat
p.line(marge + cadera / 4 + escala, marge + 18 * escala, marge + cadera / 4 + escala, marge + llarg); // lateral dret

// Pinça davantera
const pinçaX1 = marge + cintura / 8;
p.line(pinçaX1, marge, pinçaX1 + 1.5 * escala, marge + 10 * escala);
p.line(pinçaX1 + 3 * escala, marge, pinçaX1 + 1.5 * escala, marge + 10 * escala);

// Patró traser (just al costat, separat per 20 px)
const sep = 20;
const marge2 = marge + cadera / 4 + escala + sep;

p.line(marge2, marge, marge2, marge + llarg); // lateral esquerre traser
p.line(marge2, marge + llarg, marge2 + cadera / 4 + escala, marge + llarg); // base trasera
p.line(marge2, marge, marge2 + cintura / 4 + 2 * escala, marge); // cintura trasera
p.line(marge2 + cintura / 4 + 2 * escala, marge, marge2 + cadera / 4 + escala, marge + 18 * escala); // lateral corbat
p.line(marge2 + cadera / 4 + escala, marge + 18 * escala, marge2 + cadera / 4 + escala, marge + llarg); // lateral dret traser

// Pinça trasera
const pinçaX2 = marge2 + cintura / 8;
p.line(pinçaX2, marge, pinçaX2 + 1.5 * escala, marge + 10 * escala);
p.line(pinçaX2 + 3 * escala, marge, pinçaX2 + 1.5 * escala, marge + 10 * escala);


    else if (tipus === "camisa") {
      const pit = mides.pit * escala;
      const llarg = mides.llarg * escala;
      const espatlles = mides.espatlles * escala;

      p.rect(150, 100, pit, llarg);
      p.line(150, 100, 150 + espatlles, 100);
    }
  };
}

function descarregarCanvas() {
  const canvases = document.getElementsByTagName("canvas");
  if (canvases.length > 0) {
    const canvas = canvases[0];
    const link = document.createElement('a');
    link.download = tipus + '_patro.png';
    link.href = canvas.toDataURL();
    link.click();
  }
}
