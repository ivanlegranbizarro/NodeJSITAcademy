/* Crea una petita aplicació que calculi el cost d'uns quants Articles en euros a partir de les seves divises inicials, aplicant diferents conversions que usin el Decorator del punt anterior. */

const decorator = require( './decorator' );


const article1 = {
    nom: 'Article 1',
    preu: 100,
    divisa: 'USD'
};

const article2 = {
    nom: 'Article 2',
    preu: 200,
    divisa: 'GBP'
};

const article3 = {
    nom: 'Article 3',
    preu: 300,
    divisa: 'JPY'
};



const article1Decorated = decorator( article1 );
const article2Decorated = decorator( article2 );
const article3Decorated = decorator( article3 );


console.log( article1Decorated );
console.log( article2Decorated );
console.log( article3Decorated );

