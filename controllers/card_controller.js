const Card = require('../models/card');

module.exports = {
    landing(req, res, next) {
        res.render('landing.hbs');
    },

    library(req, res, next) {
        Card.find({}, (err, cards) => {
            if (err) {
                console.log(err);
            } else {
                res.render('library.hbs', {cards: cards});
                console.log(cards);
            }
        });
    },

    newCard(req, res, next) {
        res.render('new-card.hbs');
    },

    addNewCard(req, res, next) {
        const cardProps = req.body;

        Card.create(cardProps)
            .then(() => {

            })
            .catch(next);
        
        res.redirect('/library');
    },

    decks(req, res, next) {
        res.render('decks.hbs');
    }
};