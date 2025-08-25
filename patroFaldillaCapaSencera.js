function dibuixarPatroFaldillaCapaSencera(p, mides, escala) {
    const cintura = mides.cintura * escala;
    const llarg = mides.llarg * escala;
    const marge = 10;
    const radi =   cintura/2*3.14;

arc(marge+llarg+radi/2, marge, llarg+radi/2, llarg+radi/2, PI, TWO_PI); // x, y, ample, alt
arc(marge+llarg+radi/2, marge,radi/2, radi/2, PI, TWO_PI); // x, y, ample, alt
p.line(marge, marge, marge +2*llarg+radi, marge); // línia esquerra
