/* Crea un Decorator en un arxiu que retorni una funció. Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió del fitxer adjunt currency_conversions.json en funció de la divisa original. */


const decorator = ( article ) => {
    const conversions = require( './currency_conversions.json' );
    const convertirDivisa = `${ article.divisa }_EUR`;
    const preuArrodonit = Math.round( article.preu * conversions[ convertirDivisa ] * 100 ) / 100;
    return ( () => {
        return {
            nom: article.nom,
            preu: preuArrodonit,
            divisa: 'EUR'
        };
    } )();
};



module.exports = decorator;
