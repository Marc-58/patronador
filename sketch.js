let tipus = "";
let mides = {};

function mostrarOpcions() {
  // Llegeix les mides bàsiques
  const cinturaVal = parseInt(document.getElementById("cintura").value);
  const caderaVal = parseInt(document.getElementById("cadera").value);
  if (isNaN(cinturaVal) || isNaN(caderaVal)) {
    alert("Si us plau, introdueix les mides bàsiques.");
    return;
  }
  mides.cintura = cinturaVal;
  mides.cadera = caderaVal;

  // Amaga el pas 1, mostra pas 2
  document.getElementById("mides-basiques").style.display = "none";
  document.getElementById("triar-peca").style.display = "block";
}

function seleccionar(peça) {
  tipus = peça;

  // Amaga selecció i mostra només el formulari específic
  document.getElementById("triar-peca").style.display = "none";
  if (tipus === "faldilla") {
    document.getElementById("faldilla-form").style.display = "block";
  } else if (tipus === "camisa") {
    document.getElementById("camisa-form").style.display = "block";
  }
}

function generarPatro(peça) {
  if (peça === "faldilla") {
    const llarg = parseInt(document.getElementById("llargFaldilla").value);
    if (isNaN(llarg)) {
      alert("Introdueix el llarg de la faldilla.");
      return;
    }
    mides.llarg = llarg;
  } else if (peça === "camisa") {
    const espatlles = parseInt(document.getElementById("espatlles").value);
    const pit = parseInt(document.getElementById("pit").value);
    const llarg = parseInt(document.getElementById("llargCamisa").value);
    if (isNaN(espatlles) || isNaN(pit) || isNaN(llarg)) {
      alert("Introdueix totes les mides de la camisa.");
      return;
    }
    mides.espatlles = espatlles;
    mides.pit = pit;
    mides.llarg = llarg;
  }

  // Amaga formulari i prepara canvas
  if (tipus === "faldilla") {
    document.getElementById("faldilla-form").style.display = "none";
  } else if (tipus === "camisa") {
    document.getElementById("camisa-form").style.display = "none";
  }
  dibuixarPatro();
}

function dibuixarPatro() {
  const container = document.getElementById("canvas-container");
  container.innerHTML = ""; // esborra canvas anterior
  new p5(p => {
    p.setup = function() {
      p.createCanvas(500, 500);
      p.background(255);
      p.stroke(0);
      p.noFill();

      if (tipus === "faldilla") {
        // Exemple patró faldilla (rectangle)
        p.rect(100, 100, mides.cadera, mides.llarg);
      } else if (tipus === "camisa") {
        // Exemple patró camisa (rectangle i línia espatlles)
        p.rect(100, 100, mides.pit, mides.llarg);
        p.line(100, 100, 100 + mides.espatlles, 100);
      }
    };
  }, container);

  document.getElementById("descarrega-btn").style.display = "inline-block";
}

function descarregarCanvas() {
  const canvases = document.getElementsByTagName("canvas");
  if (canvases.length > 0) {
    const canvas = canvases[0];
    const link = document.createElement("a");
    link.download = tipus + "_patro.png";
    link.href = canvas.toDataURL();
    link.click();
  }
}
