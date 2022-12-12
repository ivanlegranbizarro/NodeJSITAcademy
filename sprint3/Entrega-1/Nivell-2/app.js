/* Construeix una aplicació que creï diversos Jugadors/es. Els jugadors/es podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador/a. L'aplicació ha de poder afegir o treure punts a cada jugador/a perquè el marcador canviï. La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable */

const Joc = require( "./joc" );
const Jugador = require( "./jugador" );
const Marcador = require( "./marcador" );


const joc = new Joc( 'Fútbol' );
const marcador = new Marcador( joc );
const jugador1 = new Jugador( 'Pep' );
const jugador2 = new Jugador( 'Maria' );
const jugador3 = new Jugador( 'Joan' );
const jugador4 = new Jugador( 'Anna' );

joc.afegeixJugador( jugador1 );
joc.afegeixJugador( jugador2 );
joc.afegeixJugador( jugador3 );
joc.afegeixJugador( jugador4 );

jugador1.afegeixPunt(punts = 1);
jugador2.afegeixPunt(punts = 2);
jugador3.afegeixPunt(punts = 3);

marcador.mostrarMarcador();

const joc2 = new Joc( 'Tenis' );
const marcador2 = new Marcador( joc2 );
const jugador5 = new Jugador( 'Arsenio' );
const jugador6 = new Jugador( 'Gustava' );
const jugador7 = new Jugador( 'Enriqueta' );
const jugador8 = new Jugador( 'Torcuatín' );

joc2.afegeixJugador( jugador5 );
joc2.afegeixJugador( jugador6 );
joc2.afegeixJugador( jugador7 );
joc2.afegeixJugador( jugador8 );

marcador2.mostrarMarcador();
