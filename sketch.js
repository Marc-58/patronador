let tipus = "";
let mides = {};

function mostrarOpcions() {
  mides.cintura = parseInt(document.getElementById("cintura").value);
  mides.cadera = parseInt(document.getElementById("cadera").value);

  if (isNaN(mides.cintura) || isNaN(mides.cadera)) {
    alert("Si us plau, introdueix valors vàlids per a cintura i cadera.");
    return;
  }

  document.getElementById("triar-peca").style.display = "block";
}

function seleccionar(peça) {
  tipus = peça;

  document.getElementById("faldilla-form").style.display = "none";
  document.getElementById("camisa-form").style.display = "none";

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

  const container = document.getElementById("canvas-container");
  container.innerHTML = ''; // Esborra el canvas anterior
  new p5(dibuixaPatro, container);
}

function dibuixaPatro(p) {
  p.setup = function () {
    const escala = 10;
    const marge = 10;
    p.createCanvas(1000, 5000);
    p.background(255);
    p.stroke(0);
    p.noFill();

    if (tipus === "faldilla") {
      const cintura = mides.cintura * escala;
      const cadera = mides.cadera * escala;
      const llarg = mides.llarg * escala;

      // Dibuix del patró de faldilla
      p.line(marge, marge, marge, llarg);
      p.line(marge, llarg, marge + (cadera / 4) + 1*escala, llarg);
      p.line(marge, marge, marge + (cintura / 4) + 3 * escala+ 1*escala, marge);
      p.line(marge + (cintura / 4) +1*escala+ 3 * escala, marge, marge+ (cadera / 4)+1*escala , marge+18 * escala);
      p.line(marge, marge+ (cadera / 4)+1*escala , mmarge + (cadera / 4) +1* escala, llarg);

      // Pinces
      
      p.line(cintura/8 +10, 10, cintura/8 +10+(3/2)*escala, 10+(10*escala));
      p.line(cintura/8 +10+(3/2)*escala, 10+(10 *escala), 10+cintura/8 + 3 * escala, 10 );
    }

    else if (tipus === "camisa") {
      const pit = mides.pit * escala;
      const llarg = mides.llarg * escala;
      const espatlles = mides.espatlles * escala;

      p.rect(150, 100, pit, llarg);
      p.line(150, 100, 150 + espatlles, 100);
    }
  };
}

function descarregarCanvas() {
  const canvases = document.getElementsByTagName("canvas");
  if (canvases.length > 0) {
    const canvas = canvases[0];
    const link = document.createElement('a');
    link.download = tipus + '_patro.png';
    link.href = canvas.toDataURL();
    link.click();
  }
}
