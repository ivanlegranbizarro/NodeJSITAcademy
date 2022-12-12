class Decorator {
    constructor(article) {
        this.article = article;
    }

    obtenirArticle() {
        return this.article;
    }

    convertToEuros() {
        const conversions = require('./currency_conversions.json');
        const article = this.obtenirArticle();
        const convertirDivisa = `${article.divisa}_EUR`;
        const preuConvertit = article.preu * conversions[convertirDivisa];
        const preuArrodonit = Math.round(preuConvertit * 100) / 100;
        console.log(`El preu de l'article ${article.nom} en euros és ${preuArrodonit}€`);
    };
}


module.exports = Decorator;