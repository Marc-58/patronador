function dibuixarPatroFaldillaMitjaCapa(p, mides, escala) {
   const cintura = mides.cintura * escala;
      const llarg = mides.llarg * escala;
       const radi = cintura / (2 * Math.PI)*2;

    // Arc de cintura (semicercle cap avall)
    p.arc(0, marge , 2 *radi ,2*radi, 0, p.PI);
    p.arc(0 , marge , 2 * radi+llarg*2, 2 * radi+llarg*2, 0, p.PI);
    p.line(0,marge, radi+llarg, marge );
    p.line(1,marge, 1, marge+radi+llarg );
