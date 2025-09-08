 const cintura = mides.cintura * escala;
      const llarg = mides.llarg * escala;
     const radi = cintura / (2 * Math.PI);

    // Arc de cintura (semicercle cap avall)
    p.arc(marge + radi+llarg , marge , 2 *radi ,2*radi, 0, p.PI);
    p.arc(marge + radi+llarg , marge , 2 * radi+llarg*2, 2 * radi+llarg*2, 0, p.PI);
    p.line(marge, marge, marge + 2 * radi*2+llarg*2, marge );
