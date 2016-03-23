/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var termsRouter = express.Router();

  const sampleDefinition = {
    version: "0.3.0",
    markups: [],
    atoms: [],
    cards: [],
    sections: [
      [1, "p", [
        [0, [], 0, "To be cautious with how one goes about a thought (thoughts are founded upon inside and/or outside experiences of the mind) he or she is mentally constructing"]
      ]],
    ]
  };
  const sampleDiscussion = {
    version: "0.3.0",
    markups: [],
    atoms: [],
    cards: [],
    sections: [
      [1, "p", [
        [0, [], 0, "It lets us know that Descartes is a very meticulous writer and thinker. For that reason the reader must be keenly aware of the vocabulary he uses in order to properly interpret his work."]
      ]],
    ]
  };
  const sampleExample = {
    version: "0.3.0",
    markups: [],
    atoms: [],
    cards: [],
    sections: [
      [1, "p", [
        [0, [], 0, '"All that I have, up to this moment, accepted as possessed of the highest truth and certainty, I received either from or through the senses. I observed, however, that these sometimes misled us; and it is the part of prudence not to place absolute confidence in that by which we have even once been deceived."']
      ]],
      [1, "p", [
        [0, [], 0, 'Descartes, René (2011-09-20). A Discourse on the Method & Meditations on First Philosophy (p. 70). . Kindle Edition.']
      ]],
    ]
  };

  const sampleTerm = {
    type: 'term',
    id: 1,
    attributes: {
      name: 'prudence',
      definition: sampleDefinition,
      discussion: sampleDiscussion,
      example: sampleExample
    }
  };

  const sampleTerm2 = {
    type: 'term',
    id: 2,
    attributes: {
      name: 'doubtful',
      definition: sampleDefinition,
      discussion: sampleDiscussion,
      example: sampleExample
    }
  }

  termsRouter.get('/', function(req, res) {
    res.send({
      'data': [sampleTerm, sampleTerm2]
    });
  });

  termsRouter.post('/', function(req, res) {
    res.status(201).send({
      'data': {
        type: 'term',
        id: 3,
        attributes: {
          name: 'lalalala',
          definition: sampleDefinition,
          discussion: sampleDiscussion,
          example: sampleExample
        }
      }
    });
  });

  termsRouter.get('/:id', function(req, res) {
    res.send({
      'data': sampleTerm
    });
  });

  termsRouter.put('/:id', function(req, res) {
    res.send({
      'terms': {
        id: req.params.id
      }
    });
  });

  termsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/terms', require('body-parser').json());
  app.use('/api/terms', termsRouter);
};
