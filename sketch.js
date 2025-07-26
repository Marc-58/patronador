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
    const camps = ["talleEspatlles", "pit", "torax", "altDePit", "coll", "sisa", "caiguda", "espatllesTotal", "talleDavanter"];
    for (const camp of camps) {
      mides[camp] = parseInt(document.getElementById(camp).value, 10);
    }
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
    } else if (tipus === "brusa") {
      const cintura = mides.cintura * escala;
      const espatlles = mides.espatllesTotal * escala;
      const caiguda = mides.caiguda * escala;
      const talleEspatlles = mides.talleEspatlles * escala;
      const coll = mides.coll * escala;
      const torax = mides.torax * escala;
      const altDePit = mides.altDePit * escala;
      const sisa = mides.sisa * escala;
      const marge = 10;

      // Recte principal
      p.rect(marge, marge, espatlles / 2, talleEspatlles);

      // Linia diagonal
      p.line(marge + coll / 6, marge, marge + espatlles / 2, marge + (talleEspatlles - caiguda));

      // Linia sisa vertical (amb càlcul)
      const diferent = (torax / 4 - espatlles / 2);
      const valor = (sisa * sisa) - diferent * diferent;
      let sisaVertical = 0;
      if (valor >= 0) {
        sisaVertical = Math.sqrt(valor);
      }
      p.line(marge + torax / 4 - cintura / 8, marge + mides.talleDavanter * escala, marge + torax / 4, marge + (talleEspatlles - caiguda) + sisaVertical);
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
