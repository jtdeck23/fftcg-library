

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('landing.hbs');
    });

    app.get('/library', (req, res) => {
        res.render('library.hbs');
    });

    app.get('/newCard', (req, res) => {
        res.render('new-card.hbs');
    });

    app.get('/decks', (req, res) => {
        res.render('decks.hbs');
    });
}