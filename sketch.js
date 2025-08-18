let mides = {};
let tipus; // Declarar la variable tipus

function seleccionar(peca) {
  tipus = peca;
  document.getElementById("triar-peca").style.display = "none";
  document.querySelectorAll('.formulari').forEach(f => f.style.display = 'none');
  document.getElementById(peca + '-form').style.display = 'block';
}

function generarPatro(peca) {
  // Sempre assignem cintura i cadera si existeixen
  mides.cintura = parseInt(document.getElementById("cintura")?.value, 10) || mides.cintura;
  mides.cadera = parseInt(document.getElementById("cadera")?.value, 10) || mides.cadera;

  if (peca === "faldilla") {
    mides.llarg = parseInt(document.getElementById("llargFaldilla").value, 10);
    if (isNaN(mides.llarg)) {
      alert("Introdueix un valor vàlid per al llarg de la faldilla.");
      return;
    }
  } else if (peca === "vestit") {
    mides.coll = parseInt(document.getElementById("collVestit").value, 10);
    mides.talleEspatlles = parseInt(document.getElementById("talleEspatlles").value, 10);
    mides.talleDavanter = parseInt(document.getElementById("talleDavanter").value, 10);
    mides.altDePit = parseInt(document.getElementById("altDePitVestit").value, 10);
    mides.espatlles = parseInt(document.getElementById("espatllesTotal").value, 10);
    mides.caiguda = parseInt(document.getElementById("caiguda").value, 10);
    mides.sisa = parseInt(document.getElementById("sisaVestit").value, 10);
    mides.torax = parseInt(document.getElementById("toraxVestit").value, 10);
    mides.pit = parseInt(document.getElementById("pitVestit").value, 10);
    mides.llarg = parseInt(document.getElementById("llargVestit").value, 10);

    let midesNecessaries = [
      mides.coll, mides.talleEspatlles, mides.talleDavanter, mides.altDePit,
      mides.espatlles, mides.caiguda, mides.sisa, mides.torax,
      mides.pit, mides.llarg
    ];

    if (midesNecessaries.some(v => isNaN(v))) {
      alert("Revisa que totes les mides del vestit estiguin introduïdes correctament.");
      return;
    }
  } else if (peca === "cosACintura" || peca === "cosACadera") {
    mides.coll = parseInt(document.getElementById("coll").value, 10);
    mides.talleEspatlles = parseInt(document.getElementById("talleEspatlles").value, 10);
    mides.talleDavanter = parseInt(document.getElementById("talleDavanter").value, 10);
    mides.altDePit = parseInt(document.getElementById("altDePit").value, 10);
    mides.espatlles = parseInt(document.getElementById("espatllesTotal").value, 10);
    mides.caiguda = parseInt(document.getElementById("caiguda").value, 10);
    mides.sisa = parseInt(document.getElementById("sisa").value, 10);
    mides.torax = parseInt(document.getElementById("torax").value, 10);
    mides.pit = parseInt(document.getElementById("pit").value, 10);
    mides.cintura = parseInt(document.getElementById("cintura")?.value, 10) || mides.cintura;

    if ([mides.coll, mides.talleEspatlles, mides.talleDavanter, mides.altDePit, mides.espatlles, 
         mides.caiguda, mides.sisa, mides.torax, mides.pit].some(v => isNaN(v))) {
      alert("Revisa que totes les mides del cos estiguin introduïdes correctament.");
      return;
    }

    if (peca === "cosACadera") {
      mides.cadera = parseInt(document.getElementById("cadera")?.value, 10) || mides.cadera;
    }
  } else if (peca === "faldillaPantalon") {
    mides.llarg = parseInt(document.getElementById("llargFaldillaPantalon").value, 10);
    mides.tiro = parseInt(document.getElementById("tiroFaldillaPantalon").value, 10);
    if (isNaN(mides.llarg) || isNaN(mides.tiro)) {
      alert("Introdueix valors vàlids per a la faldilla pantaló.");
      return;
    }
  } else if (peca === "pantalon") {
    mides.llarg = parseInt(document.getElementById("llargPantalon").value, 10);
    mides.genoll = parseInt(document.getElementById("genollPantalon").value, 10);
    mides.tiro = parseInt(document.getElementById("tiroPantalon").value, 10);
    if (isNaN(mides.llarg) || isNaN(mides.genoll) || isNaN(mides.tiro)) {
      alert("Revisa les mides del pantaló.");
      return;
    }
  } else if (peca === "colls") {
    mides.coll = parseInt(document.getElementById("colls").value, 10);
    if (isNaN(mides.coll)) {
      alert("Introdueix la circumferència del coll.");
      return;
    }
  } else if (peca === "maniga") {
    mides.llargTotal = parseInt(document.getElementById("llargTotal").value, 10);
    mides.llargBraç = parseInt(document.getElementById("llargBraç").value, 10);
    mides.munyeca = parseInt(document.getElementById("munyeca").value, 10);
    mides.sisa = parseInt(document.getElementById("sisaManiga").value, 10);
    mides.contornBraç = parseInt(document.getElementById("contornBraç").value, 10);
    if ([mides.llargTotal, mides.llargBraç, mides.munyeca, mides.sisa, mides.contornBraç].some(v => isNaN(v))) {
      alert("Revisa les mides de la màniga.");
      return;
    }
  } else if (peca === "faldillaMitjaCapa" || peca === "faldillaCapaSencera") {
    mides.llarg = parseInt(document.getElementById("llargFaldillaMitjaCapa").value, 10);
    mides.cintura = parseInt(document.getElementById("cinturaFaldillaMitjaCapa")?.value, 10) || mides.cintura;
    if (isNaN(mides.llarg)) {
      alert("Revisa les mides de la faldilla.");
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

    // Dibuixar patrons segons el tipus seleccionat
    switch (tipus) {
      case "cosACintura":
        dibuixarPatroCosACintura(p, mides, escala);
        break;
      case "faldilla":
        dibuixarPatroFaldilla(p, mides, escala);
        break;
      case "cosACadera":
        dibuixarPatroCosACadera(p, mides, escala);
        break;
      case "vestit":
        dibuixarPatroVestit(p, mides, escala);
        break;
      case "faldillaPantalon":
        dibuixarPatroFaldillaPantalon(p, mides, escala);
        break;
      case "pantalon":
        dibuixarPatroPantalon(p, mides, escala);
        break;
      case "colls":
        dibuixarPatroColls(p, mides, escala);
        break;
      case "maniga":
        dibuixarPatroManiga(p, mides, escala);
        break;
      case "faldillaMitjaCapa":
        dibuixarPatroFaldillaMitjaCapa(p, mides, escala);
        break;
      case "faldillaCapaSencera":
        dibuixarPatroFaldillaCapaSencera(p, mides, escala);
        break;
      default:
        console.error("Tipus de patró desconegut:", tipus);
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
