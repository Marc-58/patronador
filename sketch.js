let mides = {};
let tipus; // Variable per desar el tipus de peça seleccionada

// --- FUNCIONS PRINCIPALS ---

// Selecciona la peça de roba
function seleccionar(peca) {
  tipus = peca;
  document.getElementById("triar-peca").style.display = "none";
  document.querySelectorAll('.formulari').forEach(f => f.style.display = 'none');
  document.getElementById(peca + '-form').style.display = 'block';
  
  crearCanvasPersonalitzat(); // Crear el canvas quan es selecciona una peça
}

// Genera el patró segons la peça
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
    assignarMidesVestit();
    if (!validarMidesVestit()) return;

  } else if (peca === "cosACintura") {
    assignarMidesCosCintura();
    if (!validarMidesCosCintura()) return;

  } else if (peca === "cosACadera") {
    assignarMidesCosACadera();
    if (!validarMidesCosACadera()) return;

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

    if (isNaN(mides.llargTotal)) {
      alert("Revisa les mides de la màniga.");
      return;
    }

  } else if (peca === "faldillaMitjaCapa") {
    mides.cintura = parseFloat(document.getElementById("cinturaFaldillaMitjaCapa").value);

    if (isNaN(mides.cintura)) {
      alert("Revisa la cintura per a la faldilla de mitja capa.");
      return;
    }
  }

  // Aquí pots afegir la lògica de dibuix o càlcul del patró
  console.log("Mides registrades per a " + peca, mides);
  dibuixarPatro(peca); // Dibuixar el patró
}

// --- FUNCIONS AUXILIARS ---

// Vestit
function assignarMidesVestit() {
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
}

function validarMidesVestit() {
  let necessaries = [
    mides.coll, mides.talleEspatlles, mides.talleDavanter, mides.altDePit,
    mides.espatllesTotal, mides.caiguda, mides.sisa, mides.torax,
    mides.pit, mides.llargVestit
  ];
  if (necessaries.some(v => isNaN(v))) {
    alert("Revisa que totes les mides del vestit estiguin introduïdes correctament.");
    return false;
  }
  return true;
}

// Cos a cintura
function assignarMidesCosCintura() {
  mides.cintura = parseFloat(document.getElementById("cinturaCosACintura").value);
  mides.coll = parseFloat(document.getElementById("collCosCintura").value);
  mides.talleEspatlles = parseFloat(document.getElementById("talleEspatllesCosCintura").value);
  mides.talleDavanter = parseFloat(document.getElementById("talleDavanterCosCintura").value);
  mides.altDePit = parseFloat(document.getElementById("altDePitCosCintura").value);
  mides.espatllesTotal = parseFloat(document.getElementById("espatllesCosCintura").value);
  mides.caiguda = parseFloat(document.getElementById("caigudaCosCintura").value);
  mides.sisa = parseFloat(document.getElementById("sisaCosCintura").value);
  mides.torax = parseFloat(document.getElementById("toraxCosCintura").value);
  mides.pit = parseFloat(document.getElementById("pitCosCintura").value);
}

function validarMidesCosCintura() {
  let necessaries = [
    mides.coll, mides.talleEspatlles, mides.talleDavanter, mides.altDePit,
    mides.espatllesTotal, mides.caiguda, mides.sisa, mides.torax, mides.pit
  ];
  if (necessaries.some(v => isNaN(v))) {
    alert("Revisa que totes les mides del cos estiguin introduïdes correctament.");
    return false;
  }
  return true;
}

// Cos a cadera
function assignarMidesCosACadera() {
  mides.cadera = parseFloat(document.getElementById("caderaCosACadera").value);
  mides.cintura = parseFloat(document.getElementById("cinturaCosACadera").value);
  mides.coll = parseFloat(document.getElementById("collCosACadera").value);
  mides.talleEspatlles = parseFloat(document.getElementById("talleEspatllesCosACadera").value);
  mides.talleDavanter = parseFloat(document.getElementById("talleDavanterCosACadera").value);
  mides.altDePit = parseFloat(document.getElementById("altDePitCosACadera").value);
  mides.espatllesTotal = parseFloat(document.getElementById("espatllesCosACadera").value);
  mides.caiguda = parseFloat(document.getElementById("caigudaCosACadera").value);
  mides.sisa = parseFloat(document.getElementById("sisaCosACadera").value);
  mides.torax = parseFloat(document.getElementById("toraxCosACadera").value);
  mides.pit = parseFloat(document.getElementById("pitCosACadera").value);
}

function validarMidesCosACadera() {
  let necessaries = [
    mides.coll, mides.talleEspatlles, mides.talleDavanter, mides.altDePit,
    mides.espatllesTotal, mides.caiguda, mides.sisa, mides.torax, mides.pit
  ];
  if (necessaries.some(v => isNaN(v))) {
    alert("Revisa que totes les mides del cos estiguin introduïdes correctament.");
    return false;
  }
  return true;
}

// Funció per crear el canvas personalitzat
function crearCanvasPersonalitzat() {
  const canvasContainer = document.getElementById('canvas-container');
  canvasContainer.innerHTML = ''; // Netejar el contenidor abans de crear un nou canvas
  const canvas = document.createElement('canvas');
  canvas.width = 800; // Ample del canvas
  canvas.height = 600; // Alt del canvas
  canvas.style.border = '1px solid #ccc'; // Estil del canvas
  canvasContainer.appendChild(canvas);
  
  // Aquí pots afegir la lògica per dibuixar al canvas, si cal
}

// Funció per dibuixar el patró
function dibuixarPatro(peca) {
  const canvases = document.getElementsByTagName("canvas");
  if (canvases.length > 0) {
    const canvas = canvases[0];
    const ctx = canvas.getContext('2d');
    
    // Netejar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Dibuixar el patró segons el tipus de peça
    if (peca === "faldilla") {
      ctx.fillStyle = 'lightblue'; // Color de la faldilla
      ctx.fillRect(100, 150, mides.cintura, mides.llarg); // Dibuixar la faldilla
    } 
    // Afegir més patrons per a altres peces aquí...
  }
}
