/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var docsRouter = express.Router();

  const sampleContent = {
    version: "0.3.0",
    markups: [],
    atoms: [],
    cards: [],
    sections: [
      [1, "h2", [
        [0, [], 0, "Meditation I"]
      ]],
      [1, "h3", [
        [0, [], 0, "Of the things which may be brought within the sphere of the doubtful."]
      ]],
      [1, "p", [
        [0, [], 0, "It is now some years since I detected how many were the false beliefs that I had from my earliest youth admitted as true, and how doubtful was everything I had since constructed on this basis; and from that time I was convinced that I must once for all seriously undertake to rid myself of all the opinions which I had formerly accepted, and commence to build anew from the foundation, if I wanted to establish any firm and permanent structure in the sciences.  But as this enterprise appeared to be a very great one, I waited until I had attained an age so mature that I could not hope that at any later date I should be better fitted to execute my design. This reason caused me to delay so long that I should feel that I was doing wrong were I to occupy in deliberation the time that yet remains to me for action.  To-day, then, since very opportunely for the plan I have in view I have delivered my mind from every care [and am happily agitated by no passions] and since I have procured for myself an assured leisure in a peaceable retirement, I shall at last seriously and freely address myself to the general upheaval of all my former opinions."]
      ]]
    ]
  };

  const sampleDoc = {
    type: 'doc',
    id: 1,
    attributes: {
      name: 'Descartes First Meditation',
      content: sampleContent
    }
  };

  docsRouter.get('/', function(req, res) {
    res.send({
      'data': [sampleDoc]
    });
  });

  docsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  docsRouter.get('/:id', function(req, res) {
    res.send({"data": sampleDoc});
  });

  docsRouter.put('/:id', function(req, res) {
    res.send({
      'docs': {
        id: req.params.id
      }
    });
  });

  docsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/docs', require('body-parser').json());
  app.use('/api/docs', docsRouter);
};
