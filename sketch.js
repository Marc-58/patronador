let mides = {};
let tipus; // Declarar la variable tipus

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
  document.getElementById(peca + '-form').style.display = 'block'; // Correcció aquí
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
  container.innerHTML = '';
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

      p.line(marge, marge, marge, marge + llarg);
      p.line(marge, marge + llarg, marge + cadera / 4 + escala, marge + llarg);
      p.line(marge, marge, marge + cintura / 4 + 4 * escala, marge);
      p.line(marge + cintura / 4 + 4 * escala, marge, marge + cadera / 4 + escala, marge + 18 * escala);
      p.line(marge + cadera / 4 + escala, marge + 18 * escala, marge + cadera / 4 + escala, marge + llarg);

      const pinçaX1 = marge + cintura / 8;
      p.line(pinçaX1, marge, pinçaX1 + 1.5 * escala, marge + 10 * escala);
      p.line(pinçaX1 + 3 * escala, marge, pinçaX1 + 1.5 * escala, marge + 10 * escala);
    } else if (tipus === "brusa") {
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
      p.line(marge, 10 + altDePit, marge + (pit / 2), 10 + altDePit); // línia alt de pit
      p.line(marge, 10 + talleDavanter, marge + (cintura / 4 + 4 * escala), 10 + talleDavanter); // línia cintura
      p.line(marge + torax / 4 - cintura / 8, 10 + talleDavanter, marge + torax / 4 - cintura / 8 - 1.5 * escala, 10 + altDePit); // pinça esquerra
      p.line(marge + torax / 4 - cintura / 8 - 3 * escala, 10 + talleDavanter, marge + torax / 4 - cintura / 8 - 1.5 * escala, 10 + altDePit); // pinça dreta

      // IGUAL ESQUENA
      const xL1 = 10 + torax / 4;
      const yL1 = talleEspatlles - caiguda + sisa + 10;
      const xL2 = 10 + cintura / 4 + 2 * escala;
      const yL2 = 10 + talleEspatlles;
      const llarg = Math.sqrt((xL2 - xL1)**2 + (yL2 - yL1)**2);
      const xA = marge + (cintura / 4 + 4 * escala);
      const yA = 10 + talleDavanter;
      const xB = marge + (pit / 2);
      const yB = 10 + altDePit;
      const dx = xB - xA;
      const dy = yB - yA;
      const modul = Math.sqrt(dx * dx + dy * dy);
      const ux = dx / modul;
      const uy = dy / modul;
      const xFinal = xA + ux * llarg;
      const yFinal = yA + uy * llarg;
     
      p.line(xA, yA, xFinal, yFinal);

      p.line(marge +  torax / 4, 10+sisa , marge + torax / 4 - (torax / 4 - espatlles / 2), 10 + (talleEspatlles - caiguda)); // línia sisa
      p.bezier(
  marge + torax / 4, 10 + sisa, // punt inferior de la sisa
  marge + torax / 4 - 5*escala, 10 + sisa /3, // primer punt de control (cap a l'interior i amunt)
  marge + torax / 4 - 8 * escala, 10 + sisa /3 *2, // segon punt de control (cap a l'espatlla)
  marge + torax / 4 - (torax / 4 - espatlles / 2), 10 + (talleEspatlles - caiguda) // punt superior de la sisa (cap a l'espatlla)
);
      p.line(marge +  torax / 4, 10+sisa ,  marge + torax / 4 - cintura / 8 - 1.5 * escala, 10 + altDePit); // línia sisa
       p.line (marge + torax / 4 - cintura / 8 - 1.5 * escala, 10 + altDePit, xFinal, yFinal);

p.bezier(
  marge, 10 + coll / 6 + 2 * escala,                  // punt inferior (base del coll)
  marge + coll / 12, 10 + coll / 6,                   // primer punt de control
  marge + coll / 8, 10 + escala,                      // segon punt de control
  marge + coll / 6, 10                                // punt superior (clatell)
);

     
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

