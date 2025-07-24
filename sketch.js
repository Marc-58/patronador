let tipus = "";
let mides = {};

function mostrarOpcions() {
  mides.cintura = parseInt(document.getElementById("cintura").value, 10);
  mides.cadera = parseInt(document.getElementById("cadera").value, 10);

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
    mides.llarg = parseInt(document.getElementById("llargFaldilla").value, 10);
    if (isNaN(mides.llarg)) {
      alert("Introdueix un valor vàlid per al llarg de la faldilla.");
      return;
    }
  } else if (peca === "brusa") {
    mides.talleEspatlles = parseInt(document.getElementById("talleEspatlles").value, 10);
    mides.pit = parseInt(document.getElementById("pit").value, 10);
    mides.torax = parseInt(document.getElementById("torax").value, 10);
    mides.altDePit = parseInt(document.getElementById("altDePit").value, 10);
    mides.coll = parseInt(document.getElementById("coll").value, 10);
    mides.sisa = parseInt(document.getElementById("sisa").value, 10);
    mides.caiguda = parseInt(document.getElementById("caiguda").value, 10);
    mides.espatllesTotal = parseInt(document.getElementById("espatllesTotal").value, 10);
    mides.talleDavanter = parseInt(document.getElementById("talleDavanter").value, 10);

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
      const espatlles = mides.espatllesTotal * escala;
      const talleEspatlles = mides.talleEspatlles * escala;
      const coll = mides.coll * escala;
      const torax = mides.torax * escala;
      const sisa = mides.sisa * escala;
      const cintura = mides.cintura * escala;
      const caiguda = mides.caiguda * escala;
      const marge = espatlles / 2 + 20 * escala + 10;
      const talleDavanter = mides.talleDavanter * escala;
      const altDePit = mides.altDePit * escala;
      const pit = mides.pit * escala;

      // Part esquerra - esquena
      p.rect(10, 10, espatlles / 2, talleEspatlles);
      p.line(10 + coll / 6, 10, 10 + espatlles / 2, 10 + (talleEspatlles - caiguda)); // espatlla
      p.line(10 + torax / 4, talleEspatlles - caiguda + sisa + 10, 10 + cintura / 4 + 2 * escala, 10 + talleEspatlles); // cintura
      p.line(10 + cintura / 8 + 1.5 * escala, talleEspatlles - caiguda + sisa + 10, 10 + (cintura / 8), 10 + talleEspatlles); // pinça esquerra
      p.line(10 + cintura / 8 + 1.5 * escala, talleEspatlles - caiguda + sisa + 10, 10 + (cintura / 8) + 3 * escala, 10 + talleEspatlles); // pinça dreta
      p.line(10, 10 + talleEspatlles, 10 + (cintura / 4) + 2 * escala, 10 + talleEspatlles); // línia cintura

      // Corba realista de la sisa (Bezier)
      p.bezier(
        10 + espatlles / 2, 10 + (talleEspatlles - caiguda),
        10 + espatlles / 2 - 2 * escala, 10 + (talleEspatlles - caiguda) + 5 * escala,
        10 + torax / 4 - 5 * escala, 10 + sisa,
        10 + torax / 4, talleEspatlles - caiguda + sisa + 10
      );

      p.bezier(
        10, 10 + 1 * escala,
        10 + coll / 8, 10 + 1 * escala,
        10 + 2 * escala, 10 + 1 * escala,
        10 + coll / 6, 10
      );

      // Part dreta - davanter
      p.rect(marge, 10, torax / 4, talleDavanter);
      p.line(marge + coll / 6, 10, marge + torax / 4 - (torax / 4 - espatlles / 2), 10 + (talleEspatlles - caiguda)); // línia espatlla
      p.line(marge , 10 + altDePit, marge + (pit / 2), 10 + altDePit); // línia alt de pit
      p.line(marge , 10 + talleDavanter, marge + (cintura / 4 + 4 * escala), 10 + talleDavanter); // línia cintura
      p.line(marge + torax / 4 - cintura / 8, 10 + talleDavanter, marge + torax / 4 - cintura / 8 - 1.5 * escala, 10 + altDePit); // pinça esquerra
      p.line(marge + torax / 4 - cintura / 8 - 3 * escala, 10 + talleDavanter, marge + torax / 4 - cintura / 8 - 1.5 * escala, 10 + altDePit); // pinça dreta

      const x1 = 10 + torax / 4;
const y1 = talleEspatlles - caiguda + sisa + 10;
const x2 = 10 + cintura / 4 + 2 * escala;
const y2 = 10 + talleEspatlles;

const llarg = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
const x1 = marge + (cintura / 4 + 4 * escala);
const y1 = 10 + talleDavanter;

const xp = marge + (pit / 2);
const yp = 10 + altDePit;

// Direcció del vector
const dx = xp - x1;
const dy = yp - y1;

// Mòdul del vector
const modul = Math.sqrt(dx * dx + dy * dy);

// Normalitzem per obtenir el vector unitari
const ux = dx / modul;
const uy = dy / modul;

// Calculem el segon punt per tenir una línia del mateix llarg
const x2 = x1 + ux * llarg;
const y2 = y1 + uy * llarg;

// Dibuixa la línia
p.stroke(255, 0, 0); // vermella perquè es vegi
p.line(x1, y1, x2, y2);




const xSisa = 10 + espatlles / 2;
const ySisaInici = 10;
const ySisaFinal = ySisaInici + sisa;

p.stroke(0, 0, 255); // blau per destacar
p.line(xSisa, ySisaInici, xSisa, ySisaFinal);
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
