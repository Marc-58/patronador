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

    let midesNecessaries = [
      mides.coll, mides.talleEspatlles, mides.talleDavanter, mides.altDePit,
      mides.espatllesTotal, mides.caiguda, mides.sisa, mides.torax,
      mides.pit, mides.llargVestit
    ];
    if (midesNecessaries.some(v => isNaN(v))) {
      alert("Revisa que totes les mides del vestit estiguin introduïdes correctament.");
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
  if(isNaN(mides.llarg)){
    alert("Revisa les mides de la faldilla capa sencera ");
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

  
