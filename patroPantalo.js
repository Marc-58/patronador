function dibuixarPatroPantalo(p, mides, escala) {
    const cintura = mides.cintura * escala;
    const cadera = mides.cadera * escala;
    const llarg = mides.llarg * escala;
    const tiro = mides.tiro * escala;
    const genoll = mides.genoll * escala;
    const marge = 10;

   p.rect(marge, marge, cadera / 4, llarg);}
