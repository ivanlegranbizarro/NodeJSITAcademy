
const amqp = require( 'amqplib/callback_api' );


class Publisher {
  constructor ( queue ) {
    this.queue = queue;
  }

  publish ( msg ) {
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
        channel.sendToQueue( this.queue, Buffer.from( msg ) );
        console.log( `Publisher: Missatge enviat: ${ msg }` );
      } );
      setTimeout( () => {
        connection.close();
        process.exit( 0 );
      }, 500 );
    } );
  }
}


module.exports = Publisher;
