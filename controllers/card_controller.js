const Card = require('../models/card');

module.exports = {
    landing(req, res, next) {
        res.render('landing.hbs');
    },

    library(req, res, next) {
        var escapeRegex = (text) => {
            return text.replace(/[-[\]{}()*+?.,\\^$!#\s]/g, "\\$&");
        };
        if (req.query.name) {
            const regex = new RegExp(escapeRegex(req.query.name), 'gi');
            Card.find({name: regex}, (err, cards) => {
                if (err) {
                    console.log(err);
                } else {
                    res.render('library.hbs', {cards: cards});
                }
            });
        } else {
            Card.find({}, (err, cards) => {
                if (err) {
                    console.log(err);
                } else {
                    res.render('library.hbs', {cards: cards});
                }
            });
        }      
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
        
        res.redirect('/newCard');
    },

    decks(req, res, next) {
        res.render('decks.hbs');
    }
};