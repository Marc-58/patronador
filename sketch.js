let cintura = 0;
let cadera = 0;

function anarAFase2() {
  cintura = parseFloat(document.getElementById("cintura").value);
  cadera = parseFloat(document.getElementById("cadera").value);

  if (isNaN(cintura) || isNaN(cadera)) {
    alert("Introdueix valors numèrics per cintura i cadera.");
    return;
  }

  document.getElementById("fase1").style.display = "none";
  document.getElementById("fase2").style.display = "block";
}

function mostrarFormulariEspecific() {
  const tipus = document.getElementById("tipusPatro").value;

  document.getElementById("formulariCamisa").style.display = "none";
  document.getElementById("formulariFaldilla").style.display = "none";

  if (tipus === "camisa") {
    document.getElementById("formulariCamisa").style.display = "block";
  } else if (tipus === "faldilla") {
    document.getElementById("formulariFaldilla").style.display = "block";
  }
}

function generarPatro() {
  clear();
  background(255);

  const tipus = document.getElementById("tipusPatro").value;
  if (!tipus) {
    alert("Selecciona un patró.");
    return;
  }

  if (tipus === "camisa") {
    const espatlles = parseFloat(document.getElementById("espatlles").value);
    const llarg = parseFloat(document.getElementById("llargadaCamisa").value);
    if (isNaN(espatlles) || isNaN(llarg)) {
      alert("Introdueix valors per espatlles i llargada.");
      return;
    }
    dibuixaCamisa(espatlles, llarg);
  } else if (tipus === "faldilla") {
    const llarg = parseFloat(document.getElementById("llargadaFaldilla").value);
    if (isNaN(llarg)) {
      alert("Introdueix valor per llargada.");
      return;
    }
    dibuixaFaldilla(cintura, cadera, llarg);
  }
}

function descarregarPatro() {
  saveCanvas('patro', 'png');
}

function setup() {
  const canvas = createCanvas(400, 600);
  canvas.parent("canvas-container");
  background(255);
  noLoop();
}

function dibuixaCamisa(espatlles, llargada) {
  fill(180, 220, 255);
  rect(100, 100, espatlles, llargada);
}

function dibuixaFaldilla(cintura, cadera, llargada) {
  fill(255, 200, 200);
  beginShape();
  vertex(100, 100);
  vertex(100 + cintura, 100);
  vertex(100 + cadera, 100 + llargada);
  vertex(100, 100 + llargada);
  endShape(CLOSE);
}
