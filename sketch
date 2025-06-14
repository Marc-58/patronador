let cintura = 60;
let maluc = 90;
let llargada = 100;

function setup() {
  let canvas = createCanvas(400, 600);
  canvas.parent("canvas-container");
  noLoop();
  dibuixaPatro();
}

function actualitza() {
  cintura = parseFloat(document.getElementById("cintura").value);
  maluc = parseFloat(document.getElementById("maluc").value);
  llargada = parseFloat(document.getElementById("llargada").value);
  dibuixaPatro();
}

function dibuixaPatro() {
  clear();
  background(255);
  stroke(0);
  fill(200);

  beginShape();
  vertex(100, 100);
  vertex(100 + cintura, 100);
  vertex(100 + maluc, 100 + llargada);
  vertex(100, 100 + llargada);
  endShape(CLOSE);
}
