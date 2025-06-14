function dibuixaCamisa(pit, llarg) {
  // Dibuix simplificat
  stroke(0);
  fill(200);
  rect(100, 100, pit, llarg);
  line(100 + pit / 2, 100, 100 + pit / 2, 100 + llarg); // centre
}
