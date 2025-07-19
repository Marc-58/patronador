let tipus = "";
let mides = {};

function mostrarOpcions() {
  mides.cintura = parseInt(document.getElementById("cintura").value);
  mides.cadera = parseInt(document.getElementById("cadera").value);

  if (isNaN(mides.cintura) || isNaN(mides.cadera)) {
    alert("Si us plau, introdueix valors vàlids per a cintura i cadera.");
    return;
  }

  document.getElementById("mides-basiques").style.display = "none";
  document.getElementById("triar-peca").style.display = "block";
}

function seleccionar(peca) {
  tipus = peca;

  document.getElementById("triar-peca").style.display = "none";
  document.querySelectorAll('.formulari').forEach(f => f.style.display = 'none');
  document.getElementById(`${peca}-form`).style.display = 'block';
}

function generarPatro(peca) {
  if (peca === "faldilla") {
    mides.llarg = parseInt(document.getElementById("llargFaldilla").value);
    if (isNaN(mides.llarg)) {
      alert("Introdueix un valor vàlid per al llarg de la faldilla.");
      return;
    }
  } else if (peca === "brusa") {
    mides.talleEspatlles = parseInt(document.getElementById("talleEspatlles").value);
    mides.pit = parseInt(document.getElementById("pit").value);
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
  container.innerHTML = ''; // Neteja canvas anterior
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
      const escala = 10;
      const espatlles = mides.espatllesTotal * escala;
      const talleEspatlles = mides.talleEspatlles * escala;
      const coll = mides.coll * escala;
      const torax = mides.torax * escala;
      const sisa = mides.sisa * escala;
      const cintura = mides.cintura * escala;
      const caiguda = mides.caiguda * escala;

      p.rect(10, 10, espatlles / 2, talleEspatlles);
      p.line(10 + coll / 6, 10, 10 + espatlles / 2, 10 + (talleEspatlles - caiguda));//hombro
p.line(10 + torax / 4, talleEspatlles - caiguda + sisa + 10, 10 + cintura / 4 + 2 * escala, 10 + talleEspatlles); //igual CORREGIDA
      p.line(10 + cintura / 8 + 1.5 * escala, talleEspatlles - caiguda + sisa + 10, 10 + (cintura / 8), 10 + talleEspatlles);//pinca
      p.line(10 + cintura / 8 + 1.5 * escala, talleEspatlles - caiguda + sisa + 10, 10 + (cintura / 8) + 3*escala, 10 + talleEspatlles);//pinca
      p.line(10, 10 + talleEspatlles, 10 + (cintura / 4) + 2 * escala, 10 + talleEspatlles);//cintura
      bezier(10 + espatlles / 2, 10 + (talleEspatlles - caiguda), 10+espatlles/2, 10+13, 10+espatlles/2+3, 10+17,talleEspatlles - caiguda + sisa + 10, 10 + (cintura / 8), 10 + talleEspatlles);//sisa

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
