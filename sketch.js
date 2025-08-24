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
    mides.cadera = parseInt(document.getElementById("caderaFaldilla").value, 10);
    mides.cintura = parseInt(document.getElementById("cinturaFaldilla").value, 10);
    mides.llarg = parseInt(document.getElementById("llargFaldilla").value, 10);
    if (isNaN(mides.llarg)) {
      alert("Introdueix un valor vàlid per al llarg de la faldilla.");
      return;
    }
  } 
  else if (peca === "vestit") {
    mides.cadera = parseInt(document.getElementById("caderaVestit").value, 10);
    mides.cintura = parseInt(document.getElementById("cinturaVestit").value, 10);
    mides.coll = parseInt(document.getElementById("collVestit").value, 10);
    mides.talleEspatlles = parseInt(document.getElementById("talleEspatllesVestit").value, 10); 
    mides.talleDavanter = parseInt(document.getElementById("talleDavanterVestit").value, 10);
    mides.altDePit = parseInt(document.getElementById("altDePitVestit").value, 10);
    mides.espatllesTotal = parseInt(document.getElementById("espatllesTotalVestit").value, 10);
    mides.caiguda = parseInt(document.getElementById("caigudaVestit").value, 10);
    mides.sisa = parseInt(document.getElementById("sisaVestit").value, 10);
    mides.torax = parseInt(document.getElementById("toraxVestit").value, 10);
    mides.pit = parseInt(document.getElementById("pitVestit").value, 10);
    mides.llargVestit = parseInt(document.getElementById("llargVestit").value, 10);

    let midesNecessaries = [
      mides.coll,
      mides.talleEspatlles,
      mides.talleDavanter,
      mides.altDePit,
      mides.espatllesTotal,
      mides.caiguda,
      mides.sisa,
      mides.torax,
      mides.pit,
      mides.llargVestit
    ];

    if (midesNecessaries.some(v => isNaN(v))) {
      alert("Revisa que totes les mides del vestit estiguin introduïdes correctament.");
      return;
    }
  }
  else if (peca === "pantalo" || peca === "pantalon") {   // 🔧 correcció nom
    mides.cadera = parseInt(document.getElementById("caderaPantalo").value, 10);
    mides.cintura = parseInt(document.getElementById("cinturaPantalo").value, 10);
    mides.llarg = parseInt(document.getElementById("llargPantalo").value, 10);
    mides.tiro = parseInt(document.getElementById("tiroPantalo").value, 10);
    mides.genoll = parseInt(document.getElementById("genollPantalo").value, 10);
    if (isNaN(mides.llarg) || isNaN(mides.genoll)) {
      alert("Revisa les mides del pantaló.");
      return;
    }
  }
  else if (peca === "maniga") {
    mides.llargTotal = parseInt(document.getElementById("llargTotalManiga").value, 10);
    mides.llargBraç = parseInt(document.getElementById("llargBraç").value, 10);
    mides.munyeca = parseInt(document.getElementById("munyecaManiga").value, 10);
    mides.sisa = parseInt(document.getElementById("sisaManiga").value, 10);
    mides.biceps = parseInt(document.getElementById("bicepsManiga").value, 10);

    if (isNaN(mides.llargTotal) || isNaN(mides.biceps)) {
      alert("Revisa les mides de la màniga.");
      return;
    }
  }
  else if (peca === "faldillaMitjaCapa") {
    mides.cintura = parseInt(document.getElementById("cinturaFaldillaMitjaCapa").value, 10);
    mides.llarg = parseInt(document.getElementById("llargFaldillaMitjaCapa").value, 10);
    if (isNaN(mides.llarg) ) {
      alert("Revisa les mides de la faldilla mitja capa.");
      return;
    }
  }
  else if (peca === "faldillaCapaSencera") {
    mides.cintura = parseInt(document.getElementById("cinturaFaldillaCapaSencera").value, 10);
    mides.llarg = parseInt(document.getElementById("llargFaldillaCapaSencera").value, 10);
    if (isNaN(mides.llarg) ) {
      alert("Revisa les mides de la faldilla capa sencera.");
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
    } else if (tipus === "faldillaPantalon") {
      dibuixarPatroFaldillaPantalon(p, mides, escala);
    } else if (tipus === "pantalo" || tipus === "pantalon") {   // 🔧
      dibuixarPatroPantalo(p, mides, escala);
    } else if (tipus === "colls") {
      dibuixarPatroColls(p, mides, escala);
    } else if (tipus === "maniga") {
      dibuixarPatroManiga(p, mides, escala);
    } else if (tipus === "faldillaMitjaCapa") {
      dibuixarPatroFaldillaMitjaCapa(p, mides, escala);
    } else if (tipus === "faldillaCapaSencera") {
      dibuixarPatroFaldillaCapaSencera(p, mides, escala);
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

