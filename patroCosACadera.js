function dibuixarPatroCosACadera(p, mides, escala) {
  // 🔍 Comprovació inicial
  if (!p || typeof p.line !== "function") {
    console.error("❌ ERROR: L'objecte 'p' no està definit o no és un objecte p5.");
    return;
  }

  if (!mides || typeof mides !== "object") {
    console.error("❌ ERROR: Les 'mides' no s'han passat correctament:", mides);
    return;
  }

  if (typeof escala !== "number" || isNaN(escala)) {
    console.error("❌ ERROR: L''escala' no és un número vàlid:", escala);
    return;
  }

  // 📋 Llista de valors que han de ser definits i vàlids
  const variables = [
    "espatllesTotal", "talleEspatlles", "coll", "torax", "sisa", "cintura",
    "cadera", "altDeCadera", "caiguda", "talleDavanter", "altDePit", "pit"
  ];

  for (const key of variables) {
    const valor = mides[key];
    if (typeof valor === "undefined" || isNaN(valor)) {
      console.error(`❌ ERROR: La mida '${key}' és incorrecta o no definida:`, valor);
      return;
    }
  }

  // ✅ Dibuix actiu
  p.fill(0, 255, 0);
  p.textSize(16);
  p.text("✅ Dibuixant patró cos a cadera...", 20, 20);

  // 🔢 Extracció i escalat de mides
  const espatlles = mides.espatllesTotal * escala;
  const talleEspatlles = mides.talleEspatlles * escala;
  const coll = mides.coll * escala;
  const torax = mides.torax * escala;
  const sisa = mides.sisa * escala;
  const cintura = mides.cintura * escala;
  const cadera = mides.cadera * escala;
  const altDeCadera = mides.altDeCadera * escala;
  const caiguda = mides.caiguda * escala;
  const marge = espatlles / 2 + 20 * escala + 10;
  const talleDavanter = mides.talleDavanter * escala;
  const altDePit =

