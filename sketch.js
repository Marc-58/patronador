let tipus = "";
let mides = {};
const peces = [
  { nom: 'faldilla', img: 'https://i.pinimg.com/736x/52/d7/8f/52d78f97d4773d860a5092113134fd90.jpg' },
  { nom: 'camisa', img: 'https://via.placeholder.com/150?text=Camisa' }
];
let indexPeca = 0;

function mostrarOpcions() {
  const cinturaVal = parseInt(document.getElementById("cintura").value);
  const caderaVal = parseInt(document.getElementById("cadera").value);
  if (isNaN(cinturaVal) || isNaN(caderaVal)) {
    alert("Si us plau, introdueix les mides bàsiques.");
    return;
  }
  mides.cintura = cinturaVal;
  mides.cadera = caderaVal;

  document.getElementById("mides-basiques").style.display = "none";
  document.getElementById("triar-peca").style.display = "block";

  indexPeca = 0;
  mostrarPeca();
}

function mostrarPeca() {
  const imatge = document.getElementById("imatge-peca");
  imatge.src = peces[indexPeca].img;
  imatge.alt = peces[indexPeca].nom;
}

function canviarPeca(direccio) {
  indexPeca += direccio;
  if (indexPeca < 0) indexPeca = peces.length - 1;
  if (indexPeca >= peces.length) indexPeca = 0;
  mostrarPeca();
}

function seleccionarPeca() {
  tipus = peces[indexPeca].nom;

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

  // Amaga formulari
  if (tipus === "faldilla") {
    document.getElementById("faldilla-form").style.display = "none";
  } else if (tipus === "camisa") {
    document.getElementById("camisa-form").style.display = "none";
  }

  dibuixarPatro();
}

function dibuixarPatro() {
  const container = document.getElementById("canvas-container");
  container.innerHTML = "";
  new p5(p => {
    p.setup = function() {
      p.createCanvas(500, 500);
      p.background(255);
      p.stroke(0);
      p.noFill();

      if (tipus === "faldilla") {
        p.rect(100, 100, mides.cadera, mides.llarg);
      } else if (tipus === "camisa") {
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
    link.href = canvas.toDataURL("image/png");
    link.click();
  } else {
    alert("No s'ha generat cap patró per descarregar.");
  }
}
