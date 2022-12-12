
class Marcador {
  constructor ( joc ) {
    this.joc = joc;
  }

  mostrarMarcador () {
    console.log( `Marcador del joc ${ this.joc.nomJoc }` );
    this.joc.jugadors.forEach( j => console.log( `${ j.nom }: ${ j.puntuacio }` ) );
  }
}

const singletonMarcador = new Marcador();
Object.freeze( singletonMarcador );


module.exports = Marcador;