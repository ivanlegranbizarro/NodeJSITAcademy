/* Utilitzant RabbitMQ com a element imprescindible crea una queue on una classe Publisher publiqui missatges que siguin llegits per una classe Subscriber. Mostra l'emissió i recepció de cada missatge en consoles diferents. */

const Publisher = require( './publisher' );
const Subscriber = require( './subscriber' );

const publisher = new Publisher( 'queue' );
const subscriber = new Subscriber( 'queue' );

subscriber.subscribe();
publisher.publish( 'Hola, estic enviant un missatge!' );

