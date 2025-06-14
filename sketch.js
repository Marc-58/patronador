let tipus = "";
let mides = {};

function seleccionar(peça) {
  document.getElementById("faldilla-form").style.display = "none";
  document.getElementById("camisa-form").style.display = "none";

  if (peça === "faldilla") document.getElementById("faldilla-form").style.display = "block";
  if (peça === "camisa") document.getElementById("camisa-form").style.display = "block";

  tipus = peça;
}

function generarPatro(peça) {
  if (peça === "faldilla") {
    mides.cintura = parseInt(document.getElementById("cintura").value);
    mides.cadera = parseInt(document.getElementById("cadera").value);
    mides.llarg = parseInt(document.getElementById("llarg").value);
  } else if (peça === "camisa") {
    mides.espatlles = parseInt(document.getElementById("espatlles").value);
    mides.pit = parseInt(document.getElementById("pit").value);
    mides.llarg = parseInt(document.getElementById("llargCamisa").value);
  }

  let container = document.getElementById("canvas-container");
  container.innerHTML = ''; // neteja
  new p5(dibuixaPatro, container);
}

function dibuixaPatro(p) {
  p.setup = function () {
    p.createCanvas(400, 400);
    p.background(255);
    p.stroke(0);

    if (tipus === "faldilla") {
      p.rect(100, 100, mides.cadera, mides.llarg);
    } else if (tipus === "camisa") {
      p.rect(100, 100, mides.pit, mides.llarg);
      p.line(100, 100, 100 + mides.espatlles, 100);
    }
  };
}
