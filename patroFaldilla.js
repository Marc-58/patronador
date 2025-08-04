function dibuixarPatroFaldilla(p, mides, marge, escala) {

const cintura = mides.cintura * escala;
  const cadera = mides.cadera * escala;
  const llarg = mides.llarg * escala;
  const marge = 10;

  p.line(marge, marge, marge, marge + llarg);
  p.line(marge, marge + llarg, marge + cadera / 4 + escala, marge + llarg);
  p.line(marge, marge, marge + cintura / 4 + 4 * escala, marge);
  p.line(marge + cintura / 4 + 4 * escala, marge, marge + cadera / 4 + escala, marge + 18 * escala);
  p.line(marge + cadera / 4 + escala, marge + 18 * escala, marge + cadera / 4 + escala, marge + llarg);

  const pinçaX1 = marge + cintura / 8;
  p.line(pinçaX1, marge, pinçaX1 + 1.5 * escala, marge + 10 * escala);
  p.line(pinçaX1 + 3 * escala, marge, pinçaX1 + 1.5 * escala, marge + 10 * escala);

  const sep = 150;
  const marge2 = marge + cadera / 4 + sep;

  p.line(marge2, marge, marge2, marge + llarg);
  p.line(marge2, marge + llarg, marge2 + cadera / 4 + escala, marge + llarg);
  p.line(marge2, marge, marge2 + cintura / 4 + 2 * escala, marge);
  p.line(marge2 + cintura / 4 + 2 * escala, marge, marge2 + cadera / 4 + escala, marge + 18 * escala);
  p.line(marge2 + cadera / 4 + escala, marge + 18 * escala, marge2 + cadera / 4 + escala, marge + llarg);

  const pinçaX2 = marge2 + cintura / 8 + escala;
  p.line(pinçaX2, marge, pinçaX2 + 1.5 * escala, marge + 10 * escala);
  p.line(pinçaX2 + 3 * escala, marge, pinçaX2 + 1.5 * escala, marge + 10 * escala);
} 
