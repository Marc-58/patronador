let cintura = 0;
let cadera = 0;
let tipusPatro = "";
let dadesPatro = {};

function setup() {
  const canvas = createCanvas(400, 600);
  canvas.parent("canvas-container");
  background(255);
  noLoop(); // No fem loop automàtic, dibuixarem quan calgui
}

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
  tipusPatro = document.getElementById("tipusPatro").value;

  document.getElementById("formulariCamisa").style.display = "none";
  document.getElementById("formulariFaldilla").style.display = "none";

  // Neteja valors per evitar confusions
  if (tipusPatro === "camisa") {
    document.getElementById("formulariCamisa").style.display = "block";
    document.getElementById("espatlles").value = "";
    document.getElementById("llargadaCamisa").value = "";
  } else if (tipusPatro === "faldilla") {
    document.getElementById("formulariFaldilla").style.display = "block";
    document.getElementById("llargadaFaldilla").value = "";
  }
}

function generarPatro() {
  tipusPatro = document.getElementById("tipusPatro").value;
  if (!tipusPatro) {
    alert("Selecciona un patró.");
    return;
  }

  if (tipusPatro === "camisa") {
    const espatlles = parseFloat(document.getElementById("espatlles").value);
    const llarg = parseFloat(document.getElementById("llargadaCamisa").value);
    if (isNaN(espatlles) || isNaN(llarg)) {
      alert("Introdueix valors per espatlles i llargada.");
      return;
    }
    dadesPatro = { espatlles, llargada: llarg };
  } else if (tipusPatro === "faldilla") {
    const llarg = parseFloat(document.getElementById("llargadaFaldilla").value);
    if (isNaN(llarg)) {
      alert("Introdueix valor per llargada.");
      return;
    }
    dadesPatro = { cintura, cadera, llargada: llarg };
  }

  redraw(); // Dibuixar el patró
}

function draw() {
  background(255);

  if (tipusPatro === "camisa" && dadesPatro.espatlles) {
    dibuixaCamisa(dadesPatro.espatlles, dadesPatro.llargada);
  } else if (tipusPatro === "faldilla" && dadesPatro.llargada) {
    dibuixaFaldilla(dadesPatro.cintura, dadesPatro.cadera, dadesPatro.llargada);
  }
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

function descarregarPatro() {
  saveCanvas('patro', 'png');
}

