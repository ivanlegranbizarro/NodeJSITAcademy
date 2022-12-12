/* Crea un Decorator en un arxiu que retorni una funció. Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió del fitxer adjunt currency_conversions.json en funció de la divisa original.
Crea una petita aplicació que calculi el cost d'uns quants Articles en euros a partir de les seves divises inicials, aplicant diferents conversions que usin el Decorator del punt anterior. */

const Decorator = require('./decorator');

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


const decoratedArticle1 = new Decorator(article1);
const decoratedArticle2 = new Decorator(article2);
const decoratedArticle3 = new Decorator(article3);

decoratedArticle1.convertToEuros();
decoratedArticle2.convertToEuros();
decoratedArticle3.convertToEuros();







