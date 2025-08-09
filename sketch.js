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
  document.getElementById(peca + '-form').style.display = 'block';
}

function generarPatro(peca) {
  if (peca === "faldilla") {
    mides.llarg = parseInt(document.getElementById("llargFaldilla").value, 10);
    if (isNaN(mides.llarg)) {
      alert("Introdueix un valor vàlid per al llarg de la faldilla.");
      return;
    }
  } 
  else if (peca === "vestit") {
    mides.coll = parseInt(document.getElementById("coll").value, 10);
    mides.talleEspatlles = parseInt(document.getElementById("talleEspatlles").value, 10); 
    mides.talleDavanter = parseInt(document.getElementById("talleDavanter").value, 10);
    mides.altDePit = parseInt(document.getElementById("altDePit").value, 10);
    mides.espatllesTotal = parseInt(document.getElementById("espatllesTotal").value, 10);
    mides.caiguda = parseInt(document.getElementById("caiguda").value, 10);
    mides.sisa = parseInt(document.getElementById("sisa").value, 10);
    mides.torax = parseInt(document.getElementById("torax").value, 10);
    mides.pit = parseInt(document.getElementById("pit").value, 10);
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
  else if (peca === "cosACintura") {
    mides.coll = parseInt(document.getElementById("coll").value, 10);
    mides.talleEspatlles = parseInt(document.getElementById("talleEspatlles").value, 10);
    mides.talleDavanter = parseInt(document.getElementById("talleDavanter").value, 10);
    mides.altDePit = parseInt(document.getElementById("altDePit").value, 10);
    mides.espatllesTotal = parseInt(document.getElementById("espatllesTotal").value, 10);
    mides.caiguda = parseInt(document.getElementById("caiguda").value, 10);
    mides.sisa = parseInt(document.getElementById("sisa").value, 10);
    mides.torax = parseInt(document.getElementById("torax").value, 10);
    mides.pit = parseInt(document.getElementById("pit").value, 10);

    let midesNecessaries = [
      mides.coll,
      mides.talleEspatlles,
      mides.talleDavanter,
      mides.altDePit,
      mides.espatllesTotal,
      mides.caiguda,
      mides.sisa,
      mides.torax,
      mides.pit
    ];

    if (midesNecessaries.some(v => isNaN(v))) {
      alert("Revisa que totes les mides del cos a cintura estiguin introduïdes correctament.");
      return;
    }
  } 
  else if (peca === "cosACadera") {
    mides.coll = parseInt(document.getElementById("coll").value, 10);
    mides.talleEspatlles = parseInt(document.getElementById("talleEspatlles").value, 10);
    mides.talleDavanter = parseInt(document.getElementById("talleDavanter").value, 10);
    mides.altDePit = parseInt(document.getElementById("altDePit").value, 10);
    mides.espatllesTotal = parseInt(document.getElementById("espatllesTotal").value, 10);
    mides.caiguda = parseInt(document.getElementById("caiguda").value, 10);
    mides.sisa = parseInt(document.getElementById("sisa").value, 10);
    mides.torax = parseInt(document.getElementById("torax").value, 10);
    mides.pit = parseInt(document.getElementById("pit").value, 10);

    let midesNecessaries = [
      mides.coll,
      mides.talleEspatlles,
      mides.talleDavanter,
      mides.altDePit,
      mides.espatllesTotal,
      mides.caiguda,
      mides.sisa,
      mides.torax,
      mides.pit
    ];

    if (midesNecessaries.some(v => isNaN(v))) {
      alert("Revisa que totes les mides del cos a cadera estiguin introduïdes correctament.");
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

