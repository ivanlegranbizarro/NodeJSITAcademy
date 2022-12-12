/* Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON.
Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).
Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands inicials en cadascuna de les operacions. Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola les modificacions que es van fent als valors abans del resultat final.
 */
const fs = require( 'fs' );
const path = require( 'path' );
const Calculadora = require( './calculadora' );
const Middleware = require( './middleware' );
params = JSON.parse( fs.readFileSync( path.join( __dirname, 'params.json' ), 'utf8' ) );


const calculadora = new Calculadora();
const app = new Middleware( calculadora );


app.use( ( req, next ) => {
  req.a = req.a * req.a;
  console.log( `Middleware 1: ${ req.a }` );
  req.b = req.b * req.b;
  console.log( `Middleware 1: ${ req.b }` );
  next();
} );

app.use( ( req, next ) => {
  req.a = req.a * req.a * req.a;
  console.log( `Middleware 2: ${ req.a }` );
  req.b = req.b * req.b * req.b;
  console.log( `Middleware 2: ${ req.b }` );
  next();
} );

app.use( ( req, next ) => {
  req.a = req.a / 2;
  console.log( `Middleware 3: ${ req.a }` );
  req.b = req.b / 2;
  console.log( `Middleware 3: ${ req.b }` );
  next();
} );

console.log( app.add( { a: params.a, b: params.b } ) );
console.log( app.subtract( { a: params.a, b: params.b } ) );
console.log( app.multiply( { a: params.a, b: params.b } ) );
