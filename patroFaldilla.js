function dibuixarPatroFaldilla(p, mides, escala) {
    const cintura = mides.cintura * escala;
    const cadera = mides.cadera * escala;
    const llarg = mides.llarg * escala;
    const marge = 10;

    // Dibuix del patró de la faldilla
    // Dibuixar línies verticals i horitzontals per marcar la forma
    p.line(marge, marge, marge, marge + llarg); // línia esquerra
    p.line(marge, marge + llarg, marge + cadera / 4 + escala, marge + llarg); // línia inferior
    p.line(marge, marge, marge + cintura / 4 + 4 * escala, marge); // línia superior esquerra
    p.line(marge + cintura / 4 + 4 * escala, marge, marge + cadera / 4 + escala, marge + 18 * escala); // línia superior dreta
    p.line(marge + cadera / 4 + escala, marge + 18 * escala, marge + cadera / 4 + escala, marge + llarg); // línia dreta

    // Dibuixar pinces a la cintura
    const pinçaX1 = marge + cintura / 8;
    p.line(pinçaX1, marge, pinçaX1 + 1.5 * escala, marge + 10 * escala); // línia de pinça esquerra
    p.line(pinçaX1 + 3 * escala, marge, pinçaX1 + 1.5 * escala, marge + 10 * escala); // línia de pinça dreta

    // Separació entre les dues parts de la faldilla
    const sep = marge + cadera / 4 + 100;

    // Dibuixar la segona part de la faldilla
    p.line(sep, marge, sep, marge + llarg); // línia esquerra
    p.line(sep, marge + llarg, sep + cadera / 4 + escala, marge + llarg); // línia inferior
    p.line(sep, marge, sep + cintura / 4 + 2 * escala, marge); // línia superior esquerra
    p.line(sep + cintura / 4 + 2 * escala, marge, sep + cadera / 4 + escala, marge + 18 * escala); // línia superior dreta
    p.line(sep + cadera / 4 + escala, marge + 18 * escala, sep + cadera / 4 + escala, marge + llarg); // línia dreta

    // Dibuixar pinces a la segona part de la cintura
    const pinçaX2 = sep + cintura / 8 + escala;
    p.line(pinçaX2, marge, pinçaX2 + 1.5 * escala, marge + 10 * escala); // línia de pinça esquerra
    p.line(pinçaX2 + 3 * escala, marge, pinçaX2 + 1.5 * escala, marge + 10 * escala); // línia de pinça dreta
}


