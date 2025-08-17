// patroFaldillaMitjaCapa.js
// Faldilla mitja capa (peça = 1/4 de rodona). Es dibuixa un QUART de cercle.
// SUPÒSIT: tallar 2 peces (davanter i darrere). La suma dels 2 quarts = mitja capa.
// Fórmula radi interior (per a 1/2 capa): cintura = π * R  =>  R = cintura / π

function dibuixarPatroFaldillaMitjaCapa(p, mides, escala) {
  // --- Llegeix mides ---
  const cintura = Number(mides.cintura) || 0;     // perímetre cintura (cm)
  const llarg   = Number(mides.llarg)   || Number(mides.llargFaldilla) || 0; // llarg falda (cm)

  if (!cintura || !llarg) {
    p.push();
    p.fill(0);
    p.noStroke();
    p.textSize(16);
    p.text("Falten mides: assegura’t d’introduir 'cintura' i 'llarg'.", 40, 40);
    p.pop();
    return;
  }

  // --- Càlculs ---
  const R_in = cintura / Math.PI;        // radi interior per a 1/2 capa
  const R_out = R_in + llarg;            // radi exterior (vora)
  const s = escala;                      // píxels per cm

  // --- Marge / origen de dibuix ---
  // Deixem espai per encabir el quart de cercle cap a la dreta i avall
  const ox = 120; // origen X
  const oy = 120; // origen Y

  // --- Graella / referències (opcional, molt suau) ---
  p.push();
  p.stroke(230);
  p.strokeWeight(1);
  for (let x = 0; x <= 1200; x += 50) p.line(x, 0, x, 1200);
  for (let y = 0; y <= 1200; y += 50) p.line(0, y, 1200, y);
  p.pop();

  // --- Dibuix del quart de cercle ---
  p.push();
  p.translate(ox, oy);
  p.noFill();
  p.stroke(0);
  p.strokeWeight(2);

  // Radi interior (cintura)
  p.arc(0, 0, 2 * R_in * s, 2 * R_in * s, 0, Math.PI / 2);

  // Radi exterior (vora)
  p.arc(0, 0, 2 * R_out * s, 2 * R_out * s, 0, Math.PI / 2);

  // Radis (línies rectes) per completar el sector de 90°
  p.line(R_in * s, 0, R_out * s, 0);                 // eix horitzontal (dreta)
  p.line(0, R_in * s, 0, R_out * s);                 // eix vertical (avall)

  // Línies de tall al radi interior per indicar el sector
  p.line(0, 0, R_in * s, 0);
  p.line(0, 0, 0, R_in * s);

  // Dreceres: marca "fil" (direcció de gra)
  p.push();
  p.stroke(0);
  p.strokeWeight(1.5);
  // Fletxa del fil paral·lela a una bisectriu (45°), dins de la peça
  const fx0 = (R_in + llarg * 0.35) * s / Math.SQRT2;
  const fy0 = fx0;
  const fx1 = (R_in + llarg * 0.8)  * s / Math.SQRT2;
  const fy1 = fx1;
  p.line(fx0, fy0, fx1, fy1);
  // cap de fletxa
  const ang = Math.PI / 4;
  const ah = 10; // mida cap fletxa
  const ux = Math.cos(ang), uy = Math.sin(ang);
  // vectors perpendiculars per a les puntes
  p.line(fx1, fy1, fx1 - ah * (ux - uy), fy1 - ah * (uy + ux));
  p.line(fx1, fy1, fx1 - ah * (ux + uy), fy1 - ah * (uy - ux));
  p.pop();

  // Textos de mida
  p.push();
  p.noStroke();
  p.fill(0);
  p.textSize(14);

  // Etiquetes de radi interior i llarg
  p.text(`R (cintura) = ${(R_in).toFixed(1)} cm`, (R_in * s) + 8, 14);
  p.text(`Llarg = ${llarg} cm`, (R_out * s) + 8, 14);

  // Etiqueta general
  p.textSize(16);
  p.text("Faldilla MITJA CAPA — peça 1/4 de cercle", 0, -20);

  // Indicació tallatge
  p.textSize(12);
  p.text("Tallar 2 peces (davanter i darrere).", 0, (R_out * s) + 24);
  p.text("Marge de costura: afegeix-lo segons preferència.", 0, (R_out * s) + 42);

  p.pop();

  p.pop();
}

// Export per a ús en altres fitxers si cal
if (typeof window !== "undefined") {
  window.dibuixarPatroFaldillaMitjaCapa = dibuixarPatroFaldillaMitjaCapa;
}

