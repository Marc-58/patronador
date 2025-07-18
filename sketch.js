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
  document.getElementById("brusa-form").style.display = "none";

  if (peça === "faldilla") {
    document.getElementById("faldilla-form").style.display = "block";
  } else if (peça === "brusa") {
    document.getElementById("brusa-form").style.display = "block";
  }
}

function generarPatro(peça) {
  if (peça === "faldilla") {
    mides.llarg = parseInt(document.getElementById("llargFaldilla").value);
    if (isNaN(mides.llarg)) {
      alert("Introdueix un valor vàlid per al llarg de la faldilla.");
      return;
    }
  } else if (peça === "brusa") {
    mides.talleEspatlles = parseInt(document.getElementById("talleEspatlles").value);
    mides.pit = parseInt(document.getElementById("pit").value);
    mides.llarg = parseInt(document.getElementById("llargCamisa").value);
    mides.torax = parseInt(document.getElementById("torax").value);
    mides.altDePit = parseInt(document.getElementById("altDePit").value);
    mides.coll = parseInt(document.getElementById("coll").value);
    mides.sisa = parseInt(document.getElementById("sisa").value);
    mides.caiguda = parseInt(document.getElementById("caiguda").value);
    mides.espatllesTotal = parseInt(document.getElementById("espatllesTotal").value);
    mides.talleDavanter = parseInt(document.getElementById("talleDavanter").value);

    if (Object.values(mides).some(v => isNaN(v))) {
      alert("Revisa que totes les mides de la brusa estiguin introduïdes correctament.");
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
    p.createCanvas(1300, 1300);
    p.background(255);
    p.stroke(0);
    p.noFill();

    if (tipus === "faldilla") {
      const cintura = mides.cintura * escala;
      const cadera = mides.cadera * escala;
      const llarg = mides.llarg * escala;

      const marge = 10;

      // Frontal
      p.line(marge, marge, marge, marge + llarg);
      p.line(marge, marge + llarg, marge + cadera / 4 + escala, marge + llarg);
      p.line(marge, marge, marge + cintura / 4 + 4 * escala, marge);
      p.line(marge + cintura / 4 + 4 * escala, marge, marge + cadera / 4 + escala, marge + 18 * escala);
      p.line(marge + cadera / 4 + escala, marge + 18 * escala, marge + cadera / 4 + escala, marge + llarg);

      const pinçaX1 = marge + cintura / 8;
      p.line(pinçaX1, marge, pinçaX1 + 1.5 * escala, marge + 10 * escala);
      p.line(pinçaX1 + 3 * escala, marge, pinçaX1 + 1.5 * escala, marge + 10 * escala);

      // Darrere
      const sep = 150;
      const marge2 = marge + cadera / 4 + sep;

      p.line(marge2, marge, marge2, marge + llarg);
      p.line(marge2, marge + llarg, marge2 + cadera / 4 + escala, marge + llarg);
      p.line(marge2, marge, marge2 + cintura / 4 + 2 * escala, marge);
      p.line(marge2 + cintura / 4 + 2 * escala, marge, marge2 + cadera / 4 + escala, marge + 18 * escala);
      p.line(marge2 + cadera / 4 + escala, marge + 18 * escala, marge2 + cadera / 4 + escala, marge + llarg);

      const pinçaX2 = marge2 + cintura / 8 + escala;
      p.line(pinçaX2, marge, pinçaX2 + 1.5 * escala, marge + 10 * escala);
      p.line(pinçaX2 + 3 * escala, marge, pinçaX2 + 1.5 * escala, marge + 10 * escala);
    }

    else if (tipus === "brusa") {
      const escala = 5; // pots ajustar l’escala si queda massa petit o gran

      const pit = mides.pit * escala;
      const llarg = mides.llarg * escala;
      const espatlles = mides.espatllesTotal * escala;
      const talleEspatlles = mides.talleEspatlles * escala;
      const torax = mides.torax * escala;
      const altDePit = mides.altDePit * escala;
      const coll = mides.coll * escala;
      const sisa = mides.sisa * escala;
      const caiguda = mides.caiguda * escala;
      const talleDavanter = mides.talleDavanter * escala;

      // Dibuix base de la brusa
      p.rect(10, 10, espatlles / 2, talleEspatlles);
      p.line(10 + coll / 6, 10, 10 + espatlles / 2, 10 + (talleEspatlles - caiguda));

      // Pots afegir més línies segons les teves preferències de detall
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

