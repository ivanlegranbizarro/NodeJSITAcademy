class Jugador {
  constructor ( nom, puntuacio = 0 ) {
    this.nom = nom;
    this.puntuacio = puntuacio;
  }
  afegeixPunt ( punts ) {
    this.puntuacio += punts;
  }

  treuPunt ( punts ) {
    this.puntuacio -= punts;
  }
}

module.exports = Jugador;