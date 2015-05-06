'use strict';

var express = require('express');
var boRouter = express.Router();
var comments = require('../model/comments.model');

boRouter.route('/comments/clear')
  .post(function (req, res) {
    comments.clear();
    res.send(200);
  });

var config = require('../config/environment');
var fullContactApiMock = config.fullContact;
boRouter.route('/comments/set-image-for-email')
  .post(function (req, res) {
    fullContactApiMock.setImageForEmail(req.body.email, req.body.imageUrl);
    res.send(200);
  });

module.exports = boRouter;
