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
  const tipus = document.getElementById("tipusPatro").value;
  clear();
  background(255);

  if (tipus === "camisa") {
    const espatlles = parseFloat(document.getElementById("espatlles").value);
    const llarg = parseFloat(document.getElementById("llargadaCamisa").value);
    dibuixaCamisa(espatlles, llarg);
  } else if (tipus === "faldilla") {
    const llarg = parseFloat(document.getElementById("llargadaFaldilla").value);
    dibuixaFaldilla(cintura, cadera, llarg);
  }
}

function setup() {
  let canvas = createCanvas(400, 600);
  canvas.parent("canvas-container");
  noLoop();
}

function dibuixaCamisa(espatlles, llarg) {
  fill(200);
  rect(100, 100, espatlles, llarg);
}

function dibuixaFaldilla(cintura, cadera, llarg) {
  beginShape();
  vertex(100, 100);
  vertex(100 + cintura, 100);
  vertex(100 + cadera, 100 + llarg);
  vertex(100, 100 + llarg);
  endShape(CLOSE);
}
