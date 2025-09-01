let mides = {};
let tipus; // Declarar la variable tipus

function seleccionar(peca) {
  tipus = peca;
  document.getElementById("triar-peca").style.display = "none";
  document.querySelectorAll('.formulari').forEach(f => f.style.display = 'none');
  document.getElementById(peca + '-form').style.display = 'block';
}

function generarPatro(peca) {
  if (peca === "faldilla") {
    mides.cadera = parseFloat(document.getElementById("caderaFaldilla").value);
    mides.cintura = parseFloat(document.getElementById("cinturaFaldilla").value);
    mides.llarg = parseFloat(document.getElementById("llargFaldilla").value);
    if (isNaN(mides.llarg)) {
      alert("Introdueix un valor vàlid per al llarg de la faldilla.");
      return;
    }
  } else if (peca === "vestit") {
    mides.cadera = parseFloat(document.getElementById("caderaVestit").value);
    mides.cintura = parseFloat(document.getElementById("cinturaVestit").value);
    mides.coll = parseFloat(document.getElementById("collVestit").value);
    mides.talleEspatlles = parseFloat(document.getElementById("talleEspatllesVestit").value);
    mides.talleDavanter = parseFloat(document.getElementById("talleDavanterVestit").value);
    mides.altDePit = parseFloat(document.getElementById("altDePitVestit").value);
    mides.espatllesTotal = parseFloat(document.getElementById("espatllesTotalVestit").value);
    mides.caiguda = parseFloat(document.getElementById("caigudaVestit").value);
    mides.sisa = parseFloat(document.getElementById("sisaVestit").value);
    mides.torax = parseFloat(document.getElementById("toraxVestit").value);
    mides.pit = parseFloat(document.getElementById("pitVestit").value);
    mides.llargVestit = parseFloat(document.getElementById("llargVestit").value);

    if (isNaN(mides.llargVestit)) {
      alert("Introdueix un valor vàlid per al llarg de la faldilla.");
      return;
    }
  } else if (peca === "cosACintura") {
    mides.cintura = parseFloat(document.getElementById("cinturaCosCintura").value);
    mides.coll = parseFloat(document.getElementById("collCosCintura").value);
    mides.talleEspatlles = parseFloat(document.getElementById("talleEspatllesCosCintura").value);
    mides.talleDavanter = parseFloat(document.getElementById("talleDavanterCosCintura").value);
    mides.altDePit = parseFloat(document.getElementById("altDePitCosCintura").value);
    mides.espatllesTotal = parseFloat(document.getElementById("espatllesCosCintura").value);
    mides.caiguda = parseFloat(document.getElementById("caigudaCosCintura").value);
    mides.sisa = parseFloat(document.getElementById("sisaCosCintura").value);
    mides.torax = parseFloat(document.getElementById("toraxCosCintura").value);
    mides.pit = parseFloat(document.getElementById("pitCosCintura").value);

    let midesNecessaries = [
      mides.coll, mides.talleEspatlles, mides.talleDavanter, mides.altDePit,
      mides.espatllesTotal, mides.caiguda, mides.sisa, mides.torax, mides.pit
    ];
    if (midesNecessaries.some(v => isNaN(v))) {
      alert("Revisa que totes les mides del cos estiguin introduïdes correctament.");
      return;
    }
  } else if (peca === "cosACadera") {
    mides.cadera = parseFloat(document.getElementById("caderaVestit").value);
    mides.cintura = parseFloat(document.getElementById("cinturaVestit").value);
    mides.coll = parseFloat(document.getElementById("collVestit").value);
    mides.talleEspatlles = parseFloat(document.getElementById("talleEspatllesVestit").value);
    mides.talleDavanter = parseFloat(document.getElementById("talleDavanterVestit").value);
    mides.altDePit = parseFloat(document.getElementById("altDePitVestit").value);
    mides.espatllesTotal = parseFloat(document.getElementById("espatllesTotalVestit").value);
    mides.caiguda = parseFloat(document.getElementById("caigudaVestit").value);
    mides.sisa = parseFloat(document.getElementById("sisaVestit").value);
    mides.torax = parseFloat(document.getElementById("toraxVestit").value);
    mides.pit = parseFloat(document.getElementById("pitVestit").value);

    let midesNecessaries = [
      mides.coll, mides.talleEspatlles, mides.talleDavanter, mides.altDePit,
      mides.espatllesTotal, mides.caiguda, mides.sisa, mides.torax, mides.pit
    ];
    if (midesNecessaries.some(v => isNaN(v))) {
      alert("Revisa que totes les mides del cos estiguin introduïdes correctament.");
      return;
    }
  } else if (peca === "pantalo") {
    mides.cadera = parseFloat(document.getElementById("caderaPantalo").value);
    mides.cintura = parseFloat(document.getElementById("cinturaPantalo").value);
    mides.llarg = parseFloat(document.getElementById("llargPantalo").value);
    mides.tiro = parseFloat(document.getElementById("tiroPantalo").value);
    mides.genoll = parseFloat(document.getElementById("genollPantalo").value);
    if (isNaN(mides.llarg) || isNaN(mides.genoll)) {
      alert("Revisa les mides del pantaló.");
      return;
    }
  } else if (peca === "faldillaPantalo") {
    mides.cadera = parseFloat(document.getElementById("caderaPantalo").value);
    mides.cintura = parseFloat(document.getElementById("cinturaPantalo").value);
    mides.llarg = parseFloat(document.getElementById("llargPantalo").value);
    mides.tiro = parseFloat(document.getElementById("tiroPantalo").value);
    if (isNaN(mides.llarg)) {
      alert("Revisa les mides de la faldilla pantaló.");
      return;
    }
  } else if (peca === "colls") {
    mides.circumferenciaColl = parseFloat(document.getElementById("circunferenciaColl").value);
  } else if (peca === "maniga") {
    mides.llargTotal = parseFloat(document.getElementById("llargTotalManiga").value);
    mides.llargBraç = parseFloat(document.getElementById("llargBraç").value);
    mides.munyeca = parseFloat(document.getElementById("munyecaManiga").value);
    mides.sisa = parseFloat(document.getElementById("sisaManiga").value);
    mides.biceps = parseFloat(document.getElementById("bicepsManiga").value);
    if (isNaN(mides.llargTotal)) {   // ← aquí estava el problema
      alert("Revisa les mides de la màniga.");
      return;
    }
  } else if (peca === "faldillaMitjaCapa") {
    mides.cintura = parseFloat(document.getElementById("cinturaFaldillaMitjaCapa").value);
    mides.llarg = parseFloat(document.getElementById("llargFaldillaMitjaCapa").value);
    if (isNaN(mides.llarg)) {
      alert("Revisa les mides de la faldilla mitja capa.");
      return;
    }
  } else if (peça==="faldillaCapaSencera"){
  mides.cintura=parseFloat(document.getElementById("cinturaFaldillaCapaSencera").value);
  mides.llarg=parseFloat(document.getElementById("llargFaldillaCapaSencera").value);
     if (isNaN(mides.llarg)) {
      alert("Introdueix un valor vàlid per al llarg de la faldilla.");
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

    if (tipus === "cosACintura") {
      dibuixarPatroCosACintura(p, mides, escala);
    } else if (tipus === "faldilla") {
      dibuixarPatroFaldilla(p, mides, escala);
    } else if (tipus === "cosACadera") {
      dibuixarPatroCosACadera(p, mides, escala);
    } else if (tipus === "vestit") {
      dibuixarPatroVestit(p, mides, escala);
    } else if (tipus === "faldillaPantalo") {
      dibuixarPatroFaldillaPantalo(p, mides, escala);
    } else if (tipus === "pantalo") {
      dibuixarPatroPantalo(p, mides, escala);
    } else if (tipus === "colls") {
      dibuixarPatroColls(p, mides, escala);
    } else if (tipus === "maniga") {
      dibuixarPatroManiga(p, mides, escala);
    } else if (tipus === "faldillaMitjaCapa") {
      dibuixarPatroFaldillaMitjaCapa(p, mides, escala);
    } else if (tipus==="faldillaCapaSencera"){
      dibuixarPatroFaldillaCapaSencera(p,mides,escala);
    }
  };
}

function dibuixarPatroCosACintura(p, mides, escala) {
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
  const llargVestit = mides.llargVestit * escala;
  const cadera = mides.cadera * escala;

  // Part esquerra - esquena
  p.rect(10, 10, espatlles / 2, talleEspatlles+18);
  p.line(10 + coll / 6, 10, 10 + espatlles / 2, 10 + (talleEspatlles - caiguda)); // espatlla
  p.line(10 + torax / 4, talleEspatlles - caiguda + sisa + 10, 10 + cintura / 4 + 2 * escala, 10 + talleEspatlles); // cintura
  p.line(10 + cintura / 8 + 1.5 * escala, talleEspatlles - caiguda + sisa + 10, 10 + (cintura / 8), 10 + talleEspatlles); // pinça esquerra
  p.line(10 + cintura / 8 + 1.5 * escala, talleEspatlles - caiguda + sisa + 10, 10 + (cintura / 8) + 3 * escala, 10 + talleEspatlles); // pinça dreta
  p.line(10, 10 + talleEspatlles, 10 + (cintura / 4) - 1 * escala, 10 + talleEspatlles); // línia cintura

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
  p.rect(marge, 10, torax / 4, talleDavanter+18);
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
  const llarg = Math.sqrt((xL2 - xL1) ** 2 + (yL2 - yL1) ** 2);
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

  p.line(marge + torax / 4, 10 + sisa, marge + torax / 4 - (torax / 4 - espatlles / 2), 10 + (talleEspatlles - caiguda)); // línia sisa

  // Sisa davantera (corba)
  p.bezier(
    marge + torax / 4 - (torax / 4 - espatlles / 2),
    10 + (talleEspatlles - caiguda),
    marge + torax / 4 - 4 * escala, 10 + sisa / 3,
    marge + torax / 4 - 12 * escala, 10 + (sisa / 4) * 3,
    marge + torax / 4, 10 + sisa
  );

  // Línia vertical des de la sisa fins a l'altura de pit
  p.line(
    marge + torax / 4,
    10 + sisa,
    marge + torax / 4 - cintura / 8 - 1.5 * escala,
    10 + altDePit
  );

  // Línia diagonal des de l'altura de pit fins al final projectat
  p.line(
    marge + torax / 4 - cintura / 8 - 1.5 * escala,
    10 + altDePit,
    xFinal,
    yFinal
  );

  //cadera
  p.line(10 +cadera / 2-1 ,talleEspatlles+18+10, 10 + cintura / 4 + 2 * escala, 10 + talleEspatlles); // cintura
  p.line(marge+cadera / 2+1,talleDavanter+18+10, marge + (cintura / 4 + 4 * escala), 10 + talleDavanter); // línia cintura

  // Part de vestit
  p.rect(10, talleEspatlles+18+10, cadera / 2-1, llargVestit-18);
  p.rect(marge, talleDavanter+18+10, cadera / 2+1, llargVestit-18);

}

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

  
