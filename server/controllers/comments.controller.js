'use strict';

var express = require('express');
var commentsRouter = express.Router();
var comments = require('../model/comments.model');

commentsRouter.route('/')
  .get(function (req, res) {
    res.json(comments.get());
  })
  .post(function (req, res) {
    comments.add(req.body);
    res.send(200);
  });


module.exports = commentsRouter;
