'use strict';

var express = require('express');
var boRouter = express.Router();
var comments = require('../model/comments.model');

boRouter.route('/comments/clear')
  .post(function (req, res) {
    comments.clear();
    res.send(200);
  });


module.exports = boRouter;
