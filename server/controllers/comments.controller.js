'use strict';

var express = require('express');
var commentsRouter = express.Router();
var comments = require('../model/comments.model');

commentsRouter.route('/')
  .get(function (req, res) {
    res.json(comments.get());
  })
  .post(function (req, res) {
    comments.add(req.body).then(function (comment) {
      res.json(comment);
    });
  });


module.exports = commentsRouter;
