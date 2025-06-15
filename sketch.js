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
    const marge = 10;
    p.createCanvas(1000, 5000);
    p.background(255);
    p.stroke(0);
    p.noFill();

    if (tipus === "faldilla") {
      const cintura = (mides.cintura/4) * 10;
      const cadera = (mides.cadera/4) * 10;
      const llarg = mides.llarg * 10;

      // Dibuix del patró de faldilla
      // Variables ja definides abans: marge, escala, cintura, cadera, llarg

      p.line(marge, marge, marge, llarg+marge);
      p.line(marge, marge,cintura+marge+30+10,marge);
      p.line(marge, marge+llarg, marge + cadera + 10 , marge+180);
      p.line(cintura+marge+30+10,marge, marge+ cadera +10 , 180+marge);
      p.line(marge+ cadera +10 , 180+marge, marge + cadera + 10 , marge+llarg);

      // Pinces
      
      p.line(cintura/2 +marge, 10, cintura/2 +marge+15, 110);
      p.line(cintura/2 +marge+15, 110, marge+cintura/8 + 30, 10 );
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
