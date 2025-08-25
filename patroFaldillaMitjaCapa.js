function dibuixarPatroFaldillaMitjaCapa(p, mides, escala) {
    const cintura = mides.cintura * escala;
    const llarg = mides.llarg * escala;
    const marge = 10;

    const radi = cintura / 2 * Math.PI; 

    // Dibuixar arcs
    p.arc(marge + llarg + radi, marge, llarg + radi, llarg + radi, p.PI, p.TWO_PI + p.PI); 
    p.arc(marge + llarg + radi, marge, radi, radi, p.PI, p.TWO_PI + p.PI); 

    // Línia esquerra
    p.line(marge, marge, marge + llarg + radi / 2, marge);
}
