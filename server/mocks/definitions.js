/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var definitionsRouter = express.Router();

  definitionsRouter.get('/', function(req, res) {
    res.send({
      'definitions': []
    });
  });

  definitionsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  definitionsRouter.get('/:id', function(req, res) {
    res.send({
      'definitions': {
        id: req.params.id
      }
    });
  });

  definitionsRouter.put('/:id', function(req, res) {
    res.send({
      'definitions': {
        id: req.params.id
      }
    });
  });

  definitionsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/definitions', require('body-parser').json());
  app.use('/api/definitions', definitionsRouter);
};
