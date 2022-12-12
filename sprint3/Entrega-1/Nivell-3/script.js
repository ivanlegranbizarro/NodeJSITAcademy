/* Escriu una aplicació que creï diferents objectes Usuari/ària. L'aplicació podrà crear diferents Temes i subscriure els usuaris/es a ells. Quan un Usuari/ària afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema. També ho mostraran per consola cadascun dels Usuaris/es que estiguin subscrits al Tema (rebran el missatge). Crea un Tema amb un Usuari/ària i un altre amb dos i mostra la recepció dels missatges pels usuaris/es. Utilitza el mòdul events. */

class Tema {
  constructor ( titol ) {
    this.titol = titol;
    this.usuaris = [];
    this.missatges = [];
  }

  afegirUsuari ( usuari ) {
    this.usuaris.push( usuari );
  }

  afegirMissatge ( missatge ) {
    this.missatges.push( missatge );
    this.usuaris.forEach( ( usuari ) => {
      usuari.rebreMissatge( missatge );
    } );
  }

  usuarisSubscrits () {
    console.log( `Usuaris subscrits al tema ${ this.titol }:` );
    this.usuaris.forEach( ( usuari ) => {
      console.log( usuari.nom );
    } );
  }

}

class Usuari {
  constructor ( nom ) {
    this.nom = nom;
  }

  rebreMissatge ( missatge ) {
    console.log( `${ this.nom } ha rebut el missatge: ${ missatge }` );
  }

  subscriureTema ( tema ) {
    tema.afegirUsuari( this );
  }

  afegirMissatge ( tema, missatge ) {
    tema.afegirMissatge( missatge );
  }

}

const videojocs = new Tema( 'Videojocs' );
const cuina = new Tema( 'Cuina' );


const joan = new Usuari( 'Joan' );
const maria = new Usuari( 'Maria' );
const carles = new Usuari( 'Carles' );

joan.subscriureTema( videojocs );

maria.subscriureTema( videojocs );

carles.subscriureTema( videojocs );

carles.subscriureTema( cuina );

joan.afegirMissatge( videojocs, 'Hola, aquest és el primer missatge' );

maria.afegirMissatge( videojocs, 'Hola, aquest és el segon missatge' );

carles.afegirMissatge( videojocs, 'Hola, aquest és el tercer missatge' );

carles.afegirMissatge( cuina, 'Hola, aquest és el primer missatge de cuina' );

videojocs.usuarisSubscrits();

cuina.usuarisSubscrits();