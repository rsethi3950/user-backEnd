const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const registerRouter = express.Router();
const users = require('../models/user');

registerRouter.use(bodyParser.json());

registerRouter.route('/')
    .get((req, res, next) => {
        res.statusCode = 403;
        res.end('not supported');
    })

    .post((req, res, next) => {

        users.findOne({ "email": req.body.email }, (err, user) => {
            //why removing err argument dont give correct result? got it!!
            if (user) {
                console.log('user found');
                res.end('record already exist.. please login.');
                //res.send(err);
            }
            else {
                users.create(req.body)
                    .then((user) => {
                        console.log('user Created ', user);
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(user);
                    }, (err) => next(err))
                    .catch((err) => next(err));
            }
        })
        // if (users.find({})) {
        //     res.end('record already exist.. please login.');
        // }
        // else {
        // users.create(req.body)
        //     .then((user) => {
        //         console.log('user Created ', user);
        //         res.statusCode = 200;
        //         res.setHeader('Content-Type', 'application/json');
        //         res.json(user);
        //     }, (err) => next(err))
        //     .catch((err) => next(err));
        // }
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('not supported');
        //console.log('not supported.');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('not supported');
        //console.log('not supported.');
    });
module.exports = registerRouter;