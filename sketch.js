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
    const marge = 10;
    p.createCanvas(1000, 5000);
    p.background(255);
    p.stroke(0);
    p.noFill();

    if (tipus === "faldilla") {
      const cintura = (mides.cintura/4) * escala;
      const cadera = (mides.cadera/4) * escala;
      const llarg = mides.llarg * escala;

      // Dibuix del patró de faldilla
      // Variables ja definides abans: marge, escala, cintura, cadera, llarg

p.line(marge, marge, marge, marge + llarg);  // lateral esquerre vertical
p.line(marge, marge + llarg, marge + (cadera / 4) + escala, marge + llarg); // línia inferior
p.line(marge, marge, marge + (cintura / 4) + 3 * escala + escala, marge); // línia superior
p.line(marge + (cintura / 4) + escala + 3 * escala, marge, marge + (cadera / 4) + escala, marge + 18 * escala); // lateral dret inclinat

// Aquesta línia tenia error, corregim-la (probablement volies fer lateral dret vertical)
p.line(marge + (cadera / 4) + escala, marge + 18 * escala, marge + (cadera / 4) + escala, marge + llarg); 

// Pinces
const pinçaX = marge + cintura / 8;

p.line(pinçaX, marge, pinçaX + 1.5 * escala, marge + 10 * escala); // lateral esquerra pinça
p.line(pinçaX + 1.5 * escala, marge + 10 * escala, pinçaX + 3 * escala, marge); // lateral dreta pinça inclinada

    }

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
