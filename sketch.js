let tipus = "";
let mides = {};

function mostrarOpcions() {
  mides.cintura = parseInt(document.getElementById("cintura").value);
  mides.cadera = parseInt(document.getElementById("cadera").value);

  // Evitar NaN si els camps són buits
  if (isNaN(mides.cintura) || isNaN(mides.cadera)) {
    alert("Si us plau, introdueix valors vàlids per a cintura i cadera.");
    return;
  }

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

      p.line(10, 10, 10, llarg*10);
      p.line(10, llarg*10, 10 + cadera*10 / 4 + 1*10, llarg*10);
      p.line(10, 10, 10 + cintura*10 / 4 + 1*10 + 3*10, 10);
      p.line(10 + cintura*10 / 4 + 1*10 + 3*10, 10, 10 + cadera*10 / 4 + 1*10, 18*10);
      p.line(10 + cadera*10 / 4 + 1*10, 18*10, 10 + cadera*10 / 4 + 1*10, llarg*10);

      // Pinces
      p.line(10 + cintura*10 / 8, 10, 10 + cintura*10 / 8 + 1.5*10, 10*10+10*10);
      p.line(10 + cintura*10 / 8 + 3*10, 10, 10 + cintura*10 / 8 + 1.5*10, 20*10);
    }

    else if (tipus === "camisa") {
      const pit = mides.pit;
      const llarg = mides.llarg;
      const espatlles = mides.espatlles;

      p.rect(150, 100, pit, llarg);
      p.line(150, 100, 150 + espatlles, 100);
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

