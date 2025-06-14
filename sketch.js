let cintura, cadera;

function anarAFase2() {
  cintura = parseFloat(document.getElementById("cintura").value);
  cadera = parseFloat(document.getElementById("cadera").value);

  document.getElementById("fase1").style.display = "none";
  document.getElementById("fase2").style.display = "block";
}

function mostrarFormulariEspecific() {
  const tipus = document.getElementById("tipusPatro").value;
  document.getElementById("formulariCamisa").style.display = tipus === "camisa" ? "block" : "none";
  document.getElementById("formulariFaldilla").style.display = tipus === "faldilla" ? "block" : "none";
}

function generarPatro() {
  clear();
  background(255);

  const tipus = document.getElementById("tipusPatro").value;

  if (tipus === "camisa") {
    const espatlles = parseFloat(document.getElementById("espatlles").value);
    const llargada = parseFloat(document.getElementById("llargadaCamisa").value);
    dibuixaCamisa(espatlles, llargada);
  }

  if (tipus === "faldilla") {
    const llargada = parseFloat(document.getElementById("llargadaFaldilla").value);
    dibuixaFaldilla(cintura, cadera, llargada);
  }
}

function setup() {
  let canvas = createCanvas(400, 600);
  canvas.parent("canvas-container");
  background(255);
  noLoop();
}

function dibuixaCamisa(espatlles, llargada) {
  fill(200);
  rect(100, 100, espatlles, llargada);
}

function dibuixaFaldilla(cintura, cadera, llargada) {
  beginShape();
  vertex(100, 100);
  vertex(100 + cintura, 100);
  vertex(100 + cadera, 100 + llargada);
  vertex(100, 100 + llargada);
  endShape(CLOSE);
}
