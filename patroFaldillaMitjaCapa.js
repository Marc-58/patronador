function dibuixarPatroFaldillaMitjaCapa(p, mides, escala) {
    const cintura = mides.cintura * escala;
    const llarg = mides.llarg * escala;
    const marge = 10;
    const radi =   cintura/2*3.14;

arc(marge+llarg+radi, marge, llarg+radi, llarg+radi, PI, THREE_PI); // x, y, ample, alt
arc(marge+llarg+radi, marge,radi, radi, PI, THREE_PI); // x, y, ample, alt
p.line(marge, marge, marge +llarg+radi/2, marge); // línia esquerra

