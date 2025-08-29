function dibuixarPatroPantalo(p, mides, escala) {
    const cintura = mides.cintura * escala;
    const cadera = mides.cadera * escala;
    const llarg = mides.llarg * escala;
    const tiro = mides.tiro * escala;
    const genoll = mides.genoll * escala;
    const marge = 50;

   p.rect(marge, marge, cadera / 4, llarg);
   p.rect(cadera/4+2*marge, marge, cadera / 4, llarg);

}

