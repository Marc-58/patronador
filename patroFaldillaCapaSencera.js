function dibuixarPatroFaldilla(p, mides, escala) {
    const cintura = mides.cintura * escala;
    const llarg = mides.llarg * escala;
    const marge = 10;
    const radi =   cintura/2*3.14;

  ellipse(marge+llarg+radi, marge, llarg+radi, llarg+radi); // x, y, ample, alt
