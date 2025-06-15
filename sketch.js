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
    p.noFill();

    if (tipus === "faldilla") {
      const cintura = mides.cintura;
      const cadera = mides.cadera;
      const llarg = mides.llarg;

      // Línies que defineixen el patró de la faldilla
      p.line(10, 10, 10, llarg); // línia lateral esquerra
      p.line(10, llarg, 10 + cadera / 4 + 1, llarg); // línia inferior
      p.line(10, 10, 10 + cintura / 4 + 1 + 3, 10); // línia superior
      p.line(10 + cintura / 4 + 1 + 3, 10, 10 + cadera / 4 + 1, 18 + 10); // lateral dret inclinat
      p.line(10 + cadera / 4 + 1, 18 + 10, 10 + cadera / 4 + 1, llarg); // lateral dret vertical

      // Pinces de la cintura
      p.line(10 + cintura / 8, 10, 10 + cintura / 8 + 3 / 2, 10 + 10); // lateral esquerra de la pinça
      p.line(10 + cintura / 8 + 3, 10, 10 + cintura / 8 + 3 / 2, 10 + 10); // lateral dreta de la pinça
    }

    else if (tipus === "camisa") {
      const pit = mides.pit;
      const llarg = mides.llarg;
      const espatlles = mides.espatlles;

      p.rect(150, 100, pit, llarg); // cos de la camisa
      p.line(150, 100, 150 + espatlles, 100); // línia d'espatlles
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
