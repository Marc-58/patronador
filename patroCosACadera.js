function dibuixarPatroCosACadera(p, mides, escala) {
      const espatlles = mides.espatllesTotal * escala;
      const talleEspatlles = mides.talleEspatlles * escala;
      const coll = mides.coll * escala;
      const torax = mides.torax * escala;
      const sisa = mides.sisa * escala;
      const cintura = mides.cintura * escala;
      const caiguda = mides.caiguda * escala;
      const marge = espatlles / 2 + 20 * escala + 10;
      const talleDavanter = mides.talleDavanter * escala;
      const altDePit = mides.altDePit * escala;
      const pit = mides.pit * escala;

      // Part esquerra - esquena
      p.rect(10, 10, espatlles / 2, talleEspatlles);
      p.line(10 + coll / 6, 10, 10 + espatlles / 2, 10 + (talleEspatlles - caiguda)); // espatlla
      p.line(10 + torax / 4, talleEspatlles - caiguda + sisa + 10, 10 + cintura / 4 + 2 * escala, 10 + talleEspatlles); // cintura
      p.line(10 + cintura / 8 + 1.5 * escala, talleEspatlles - caiguda + sisa + 10, 10 + (cintura / 8), 10 + talleEspatlles); // pinça esquerra
      p.line(10 + cintura / 8 + 1.5 * escala, talleEspatlles - caiguda + sisa + 10, 10 + (cintura / 8) + 3 * escala, 10 + talleEspatlles); // pinça dreta
      p.line(10, 10 + talleEspatlles, 10 + (cintura / 4) + 2 * escala, 10 + talleEspatlles); // línia cintura

      // Corba realista de la sisa (Bezier)
      p.bezier(
        10 + espatlles / 2, 10 + (talleEspatlles - caiguda),
        10 + espatlles / 2 - 2 * escala, 10 + (talleEspatlles - caiguda) + 5 * escala,
        10 + torax / 4 - 5 * escala, 10 + sisa,
        10 + torax / 4, talleEspatlles - caiguda + sisa + 10
      );

      p.bezier(
        10, 10 + 1 * escala,
        10 + coll / 8, 10 + 1 * escala,
        10 + 2 * escala, 10 + 1 * escala,
        10 + coll / 6, 10
      );

      // Part dreta - davanter
      p.rect(marge, 10, torax / 4, talleDavanter);
      p.line(marge + coll / 6, 10, marge + torax / 4 - (torax / 4 - espatlles / 2), 10 + (talleEspatlles - caiguda)); // línia espatlla
      p.line(marge, 10 + altDePit, marge + (pit / 2), 10 + altDePit); // línia alt de pit
      p.line(marge, 10 + talleDavanter, marge + (cintura / 4 + 4 * escala), 10 + talleDavanter); // línia cintura
      p.line(marge + torax / 4 - cintura / 8, 10 + talleDavanter, marge + torax / 4 - cintura / 8 - 1.5 * escala, 10 + altDePit); // pinça esquerra
      p.line(marge + torax / 4 - cintura / 8 - 3 * escala, 10 + talleDavanter, marge + torax / 4 - cintura / 8 - 1.5 * escala, 10 + altDePit); // pinça dreta

      // IGUAL ESQUENA
      const xL1 = 10 + torax / 4;
      const yL1 = talleEspatlles - caiguda + sisa + 10;
      const xL2 = 10 + cintura / 4 + 2 * escala;
      const yL2 = 10 + talleEspatlles;
      const llarg = Math.sqrt((xL2 - xL1)**2 + (yL2 - yL1)**2);
      const xA = marge + (cintura / 4 + 4 * escala);
      const yA = 10 + talleDavanter;
      const xB = marge + (pit / 2);
      const yB = 10 + altDePit;
      const dx = xB - xA;
      const dy = yB - yA;
      const modul = Math.sqrt(dx * dx + dy * dy);
      const ux = dx / modul;
      const uy = dy / modul;
      const xFinal = xA + ux * llarg;
      const yFinal = yA + uy * llarg;
     
      p.line(xA, yA, xFinal, yFinal);

      p.line(marge +  torax / 4, 10+sisa , marge + torax / 4 - (torax / 4 - espatlles / 2), 10 + (talleEspatlles - caiguda)); // línia sisa
// Sisa davantera (corba)
        
p.bezier(
  marge + torax / 4 - (torax / 4 - espatlles / 2) ,              // Punt superior lleugerament a la dreta
  10 + (talleEspatlles - caiguda),                                  // Punt inferior lleugerament a l'esquerra
  marge + torax / 4 - 4 * escala, 10 + sisa / 3,                          // Primer punt de control
  marge + torax / 4 - 12 * escala, 10 + (sisa / 4) * 3,                   // Segon punt de control
  marge + torax / 4 , 10 + sisa
);

// Línia vertical des de la sisa fins a l'altura de pit
p.line(
  marge + torax / 4,
  10 + sisa,
  marge + torax / 4 - cintura / 8 - 1.5 * escala,
  10 + altDePit
);

// Línia diagonal des de l'altura de pit fins al final projectat
p.line(
  marge + torax / 4 - cintura / 8 - 1.5 * escala,
  10 + altDePit,
  xFinal,
  yFinal
);

//p.arc(marge, 10, coll/6+2, coll/6 + 4*escala, 0, p.HALF_PI);




     
    }
