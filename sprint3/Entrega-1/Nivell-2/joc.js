class Joc {
  constructor ( nomJoc ) {
    this.nomJoc = nomJoc;
    this.jugadors = [];
  }

  afegeixJugador ( jugador ) {
    this.jugadors.push( jugador );
  }

  treuJugador ( jugador ) {
    this.jugadors = this.jugadors.filter( j => j !== jugador );
  }
}


module.exports = Joc;