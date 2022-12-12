const amqp = require( 'amqplib/callback_api' );

class Subscriber {
  constructor ( queue ) {
    this.queue = queue;
  }

  subscribe () {
    amqp.connect( 'amqp://localhost', ( error0, connection ) => {
      if ( error0 ) {
        throw error0;
      }
      connection.createChannel( ( error1, channel ) => {
        if ( error1 ) {
          throw error1;
        }
        channel.assertQueue( this.queue, {
          durable: false
        } );
        channel.consume( this.queue, ( msg ) => {
          console.log( `Subscriber: Missatge rebut: ${ msg.content.toString() }` );
        }, {
          noAck: true
        } );
      } );
    } );
  }
}

module.exports = Subscriber;
