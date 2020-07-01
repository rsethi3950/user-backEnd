const mongoose = require('mongoose');
const express = require('express');
const users = require('../models/user');
const bodyParser = require('body-parser');
const detailsRouter = express.Router();
//detailsRouter.use(bodyParser.json());

//var Collection = users.getCollectionNames();
//list.json(user);
detailsRouter.get('/', (req, res, err) => {
    users.find((err, user) => {
        if (err) return console.log(err);
        //res.json('all the details');
        res.json(user);
    })
})

module.exports = detailsRouter;