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
    mides.cintura = parseInt(document.getElementById("cintura").value, 10);
mides.cadera = parseInt(document.getElementById("cadera").value, 10);
    mides.llarg = parseInt(document.getElementById("llargFaldilla").value, 10);
    if (isNaN(mides.llarg)) {
      alert("Introdueix un valor vàlid per al llarg de la faldilla.");
      return;
    }
  } 
  else if (peca === "vestit") {
    mides.cintura = parseInt(document.getElementById("cintura").value, 10);
mides.cadera = parseInt(document.getElementById("cadera").value, 10);
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
  else if (peca === "cosACintura") {
    mides.cintura = parseInt(document.getElementById("cintura").value, 10);
    mides.coll = parseInt(document.getElementById("collCosCintura").value, 10);
    mides.talleEspatlles = parseInt(document.getElementById("talleEspatllesCosCintura").value, 10);
    mides.talleDavanter = parseInt(document.getElementById("talleDavanterCosCintura").value, 10);
    mides.altDePit = parseInt(document.getElementById("altDePitCosCintura").value, 10);
    mides.espatllesTotal = parseInt(document.getElementById("espatllesTotalCosCintura").value, 10);
    mides.caiguda = parseInt(document.getElementById("caigudaCosCintura").value, 10);
    mides.sisa = parseInt(document.getElementById("sisaCosCintura").value, 10);
    mides.torax = parseInt(document.getElementById("toraxCosCintura").value, 10);
    mides.pit = parseInt(document.getElementById("pitCosCintura").value, 10);

    if ([mides.coll, mides.talleEspatlles, mides.talleDavanter, mides.altDePit, mides.espatllesTotal, mides.caiguda, mides.sisa, mides.torax, mides.pit].some(v => isNaN(v))) {
      alert("Revisa que totes les mides del cos a cintura estiguin introduïdes correctament.");
      return;
    }
  } 
  else if (peca === "cosACadera") {
    mides.cintura = parseInt(document.getElementById("cintura").value, 10);
mides.cadera = parseInt(document.getElementById("cadera").value, 10);
    mides.coll = parseInt(document.getElementById("collCosCadera").value, 10);
    mides.talleEspatlles = parseInt(document.getElementById("talleEspatllesCosCadera").value, 10);
    mides.talleDavanter = parseInt(document.getElementById("talleDavanterCosCadera").value, 10);
    mides.altDePit = parseInt(document.getElementById("altDePitCosCadera").value, 10);
    mides.espatllesTotal = parseInt(document.getElementById("espatllesTotalCosCadera").value, 10);
    mides.caiguda = parseInt(document.getElementById("caigudaCosCadera").value, 10);
    mides.sisa = parseInt(document.getElementById("sisaCosCadera").value, 10);
    mides.torax = parseInt(document.getElementById("toraxCosCadera").value, 10);
    mides.pit = parseInt(document.getElementById("pitCosCadera").value, 10);

    if ([mides.coll, mides.talleEspatlles, mides.talleDavanter, mides.altDePit, mides.espatllesTotal, mides.caiguda, mides.sisa, mides.torax, mides.pit].some(v => isNaN(v))) {
      alert("Revisa que totes les mides del cos a cadera estiguin introduïdes correctament.");
      return;
    }
  }
  else if (peca === "faldillaPantalon") {
    mides.cintura = parseInt(document.getElementById("cintura").value, 10);
mides.cadera = parseInt(document.getElementById("cadera").value, 10);
    mides.llarg = parseInt(document.getElementById("llargFaldillaPantalon").value, 10);
    mides.tiro = parseInt(document.getElementById("tiroFaldillaPantalon").value, 10);
   
    if (isNaN(mides.llarg) || isNaN(mides.tiro)) {
      alert("Introdueix valors vàlids per a la faldilla pantaló.");
      return;
    }
  } 
  else if (peca === "pantalon") {
    mides.cintura = parseInt(document.getElementById("cintura").value, 10);
mides.cadera = parseInt(document.getElementById("cadera").value, 10);
    mides.llarg = parseInt(document.getElementById("llargPantalon").value, 10);
    mides.genoll = parseInt(document.getElementById("genollPantalon").value, 10);
    mides.tiro = parseInt(document.getElementById("tiroPantalon").value, 10);
   
    if (isNaN(mides.llarg) || isNaN(mides.genoll) || isNaN(mides.tiro)) {
      alert("Revisa les mides del pantaló.");
      return;
    }
  }
  else if (peca === "colls") {
    mides.circumferenciaColl = parseInt(document.getElementById("circumferenciaColl").value, 10);
    if (isNaN(mides.circumferenciaColl)) {
      alert("Introdueix la circumferència del coll.");
      return;
    }
  }
  else if (peca === "maniga") {
    mides.llargTotal = parseInt(document.getElementById("llargTotalManiga").value, 10);
    mides.llargBraç = parseInt(document.getElementById("llargBraçManiga").value, 10);
    mides.munyeca = parseInt(document.getElementById("munyecaManiga").value, 10);
    mides.sisa = parseInt(document.getElementById("sisaManiga").value, 10);
    mides.contornBraç = parseInt(document.getElementById("contornBraçManiga").value, 10);

    if ([mides.llargTotal, mides.llargBraç, mides.munyeca, mides.sisa, mides.contornBraç].some(v => isNaN(v))) {
      alert("Revisa les mides de la màniga.");
      return;
    }
  }
  else if (peca === "faldillaMitjaCapa") {
    mides.cintura = parseInt(document.getElementById("cintura").value, 10);
    mides.llarg = parseInt(document.getElementById("llargFaldillaMitjaCapa").value, 10);
    if (isNaN(mides.llarg)) {
      alert("Revisa les mides de la faldilla mitja capa.");
      return;
    }
  }
  else if (peca === "faldillaCapaSencera") {
    mides.cintura = parseInt(document.getElementById("cintura").value, 10);
    mides.llarg = parseInt(document.getElementById("llargFaldillaCapaSencera").value, 10);
    if (isNaN(mides.llarg)) {
      alert("Revisa les mides de la faldilla capa sencera.");
      return;
    }
  }
  const container = document.getElementById("canvas-container");
  container.innerHTML = '';
  new p5(dibuixaPatro, container);
  function descarregarCanvas() { const canvases = document.getElementsByTagName("canvas"); if (canvases.length > 0) { const canvas = canvases[0]; const link = document.createElement('a'); link.download = tipus + '_patro.png'; link.href = canvas.toDataURL(); link.click(); } }
}
