let tipus = "";
let mides = {};

function mostrarOpcions() {
  mides.cintura = parseInt(document.getElementById("cintura").value);
  mides.cadera = parseInt(document.getElementById("cadera").value);

  if (isNaN(mides.cintura) || isNaN(mides.cadera)) {
    alert("Falten mides bàsiques");
    return;
  }

  document.getElementById("mides-basiques").style.display = "none";
  document.getElementById("triar-peca").style.display = "block";
}

function seleccionar(peca) {
  tipus = peca;
  document.getElementById("triar-peca").style.display = "none";
  document.querySelectorAll(".formulari").forEach(f => f.style.display = "none");
  document.getElementById(`${peca}-form`).style.display = "block";
}

function generarPatro(peca) {
  if (peca === "faldilla") {
    mides.llarg = parseInt(document.getElementById("llargFaldilla").value);
    if (isNaN(mides.llarg)) {
      alert("Introdueix un llarg vàlid");
      return;
    }
  } else if (peca === "brusa") {
    const camps = ["coll", "talleEspatlles", "talleDavanter", "altDePit", "espatllesTotal", "caiguda", "sisa", "torax", "pit"];
    for (const camp of camps) {
      mides[camp] = parseInt(document.getElementById(camp).value);
    }
    if (Object.values(mides).some(v => isNaN(v))) {
      alert("Comprova totes les mides de la brusa");
      return;
    }
  }

  const container = document.getElementById("canvas-container");
  container.innerHTML = '';
  new p5(dibuixaPatro, container);
}

function dibuixaPatro(p) {
  p.setup = function () {
    p.createCanvas(800, 800);
    p.background(255);
    p.stroke(0);
    const escala = 10;
    const marge = 10;

    if (tipus === "faldilla") {
      const cintura = mides.cintura * escala;
      const cadera = mides.cadera * escala;
      const llarg = mides.llarg * escala;

      p.line(marge, marge, marge, marge + llarg);
      p.line(marge, marge + llarg, marge + cadera / 4 + escala, marge + llarg);
      p.line(marge, marge, marge + cintura / 4 + 4 * escala, marge);
      p.line(marge + cintura / 4 + 4 * escala, marge, marge + cadera / 4 + escala, marge + 18 * escala);
      p.line(marge + cadera / 4 + escala, marge + 18 * escala, marge + cadera / 4 + escala, marge + llarg);
    }

    if (tipus === "brusa") {
      const { coll, talleEspatlles, talleDavanter, altDePit, espatllesTotal, caiguda, sisa, torax, pit, cintura } = mides;
      const escala = 10;

      // Quadrat base
      const ample = torax / 4 * escala;
      const alt = talleDavanter * escala;
      p.rect(marge, 10, ample, alt);

      // Línia espatlla
      p.line(
        marge + coll / 6 * escala,
        10,
        marge + espatllesTotal / 2 * escala,
        10 + (talleEspatlles - caiguda) * escala
      );

      // Línia cintura
      const x1 = marge + torax / 4 * escala;
      const y1 = talleEspatlles * escala - caiguda * escala + sisa * escala + 10;
      const x2 = marge + cintura / 4 * escala + 2 * escala;
      const y2 = 10 + talleEspatlles * escala;

      p.stroke('black');
      p.line(x1, y1, x2, y2);

      // Càlcul de llarg de la línia anterior
      const llarg = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

      // Línia que comença a la cintura i passa pel pit, amb la mateixa llargada
      const xStart = marge + (cintura / 4 + 4) * escala;
      const yStart = 10 + talleDavanter * escala;
      const xp = marge + (pit / 2) * escala;
      const yp = 10 + altDePit * escala;

      const dx = xp - xStart;
      const dy = yp - yStart;
      const modul = Math.sqrt(dx*dx + dy*dy);
      const ux = dx / modul;
      const uy = dy / modul;
      const xEnd = xStart + ux * llarg;
      const yEnd = yStart + uy * llarg;

      p.stroke('red');
      p.line(xStart, yStart, xEnd, yEnd);

      // Línia vertical des del final espatlla amb longitud sisa
      const xSisa = marge + espatllesTotal / 2 * escala;
      const ySisaInici = 10 + (talleEspatlles - caiguda) * escala;
      const ySisaFinal = ySisaInici + sisa * escala;

      p.stroke('blue');
      p.line(xSisa, ySisaInici, xSisa, ySisaFinal);

      // Càlcul de sisaVertical amb √
      const base = torax / 4 - espatllesTotal / 2;
      const sisaVertical = Math.sqrt((sisa ** 2) - (base ** 2)) * escala;

      p.stroke('green');
      p.line(
        marge + torax / 4 * escala - cintura / 8 * escala,
        10 + talleDavanter * escala,
        marge + torax / 4 * escala,
        10 + (talleEspatlles - caiguda) * escala + sisaVertical
      );
    }
  };
}

function descarregarCanvas() {
  const canvas = document.querySelector("canvas");
  if (!canvas) return;

  const link = document.createElement("a");
  link.download = tipus + "_patro.png";
  link.href = canvas.toDataURL();
  link.click();
}

