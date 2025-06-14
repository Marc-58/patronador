let tipus = "";
let mides = {};

function mostrarOpcions() {
  mides.cintura = parseInt(document.getElementById("cintura").value);
  mides.cadera = parseInt(document.getElementById("cadera").value);

  // Mostrar pas 2
  document.getElementById("triar-peca").style.display = "block";
}

function seleccionar(peça) {
  tipus = peça;

  // Amagar tots els formularis
  document.getElementById("faldilla-form").style.display = "none";
  document.getElementById("camisa-form").style.display = "none";

  // Mostrar el formulari correcte
  if (peça === "faldilla") {
    document.getElementById("faldilla-form").style.display = "block";
  } else if (peça === "camisa") {
    document.getElementById("camisa-form").style.display = "block";
  }
}

function generarPatro(peça) {
  if (peça === "faldilla") {
    mides.llarg = parseInt(document.getElementById("llargFaldilla").value);
  } else if (peça === "camisa") {
    mides.espatlles = parseInt(document.getElementById("espatlles").value);
    mides.pit = parseInt(document.getElementById("pit").value);
    mides.llarg = parseInt(document.getElementById("llargCamisa").value);
  }

  let container = document.getElementById("canvas-container");
  container.innerHTML = ''; // esborra canvas anterior
  new p5(dibuixaPatro, container);
}

function dibuixaPatro(p) {
  p.setup = function () {
    p.createCanvas(500, 500);
    p.background(255);
    p.stroke(0);
    p.fill(200);

    if (tipus === "faldilla") {
      // Patró simple de faldilla
      p.rect(150, 100, mides.cadera, mides.llarg);
    } else if (tipus === "camisa") {
      // Patró simple de camisa
      p.rect(150, 100, mides.pit, mides.llarg);
      p.line(150, 100, 150 + mides.espatlles, 100); // línia d'espatlles
    }
  };
}

function descarregarCanvas() {
  let canvases = document.getElementsByTagName("canvas");
  if (canvases.length > 0) {
    let canvas = canvases[0];
    let link = document.createElement('a');
    link.download = tipus + '_patro.png';
    link.href = canvas.toDataURL();
    link.click();
  }
}
