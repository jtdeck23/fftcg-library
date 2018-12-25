const CardController = require('../controllers/card_controller');

module.exports = (app) => {
    app.get('/', CardController.landing);
    app.get('/library', CardController.library);
    app.post('/library', CardController.addNewCard);
    app.get('/newCard', CardController.newCard);
    app.get('/decks', CardController.decks);
};