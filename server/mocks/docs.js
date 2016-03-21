/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var docsRouter = express.Router();

  const sampleContent = {
    version: "0.3.0",
    markups: [],
    atoms: [
      [
        "definition-atom",
        "prudence",
        {id: 1, name: "prudence"}
      ]
    ],
    cards: [
      [
        "transversion-card",
        {
          source: {
            "version": "0.3.0",
            "atoms": [
              [
                "definition-atom",
                "prudence",
                {id: 1, name: "prudence"}
              ]
            ],
            "cards": [],
            "markups": [],
            "sections": [
              [
                1,
                "p",
                [
                  [0, [], 0, "It is now some years since I detected how many were the false beliefs that I had from my earliest youth admitted as true, and how doubtful was everything I had since constructed on this basis; and from that time I was convinced that I must once for all seriously undertake to rid myself of all the opinions which I had formerly accepted, and commence to build anew from the foundation, if I wanted to establish any firm and permanent structure in the sciences.  But as this enterprise appeared to be a very great one, I waited until I had attained an age so mature that I could not hope that at any later date I should be better fitted to execute my design. This reason caused me to delay so long that I should feel that I was doing wrong were I to occupy in deliberation the time that yet remains to me for action.  To-day, then, since very opportunely for the plan I have in view I have delivered my mind from every care [and am happily agitated by no passions] and since I have procured for myself an assured leisure in a peaceable retirement, I shall at last seriously and freely address myself to the general upheaval of all my former opinions."]
                ]
              ],
              [
                 1,
                 "p",
                 [
                   [
                     0,
                     [],
                     0,
                     "Can we link to an author? "
                   ],
                   [
                     1,
                     [],
                     0,
                     0
                   ]
                 ]
               ]
            ]
          },
          transversion: {
            "version": "0.3.0",
            "atoms": [],
            "cards": [],
            "markups": [],
            "sections": [
              [
                1,
                "p",
                [
                  [0, [], 0, "I am aware that some things I once believed turned out to be wrong; and if I was mistaken about basic things, like that my teachers and parents were always right, what does that say about all the things I learned from them? So I realize I have to start again from the beginning if I am to know anything for sure. I kept putting it off. But I can't put it off forever! So today I have finally decided to take some time to myself to sort things out. Today I will question everything I ever believed!"]
                ]
              ]
            ]
          },
          summary: 'Over the course of several years, I have concluded that there are many reasonable doubt within our limited knowledge.'
        }
      ],
      [
        "transversion-card",
        {
          source: {
            "version": "0.3.0",
            "atoms": [],
            "cards": [],
            "markups": [],
            "sections": [
              [
                1,
                "p",
                [
                  [0, [], 0, "Yet to bring this about I will not need to show that all my opinions are false, which is perhaps something I could never accomplish. But reason now persuades me that I should withhold my assent no less carefully from opinions that are not completely certain and indubitable than I would from those that are patently false. For this reason, it will suffice for the rejection of all of these opinions, if I find in each of them some reason for doubt. Nor therefore need I survey each opinion individually, a task that would be endless. Rather, because undermining the foundations will cause whatever has been built upon them to crumble of its own accord, I will attack straightaway those principles which supported everything I once believed."]
                ]
              ]
            ]
          },
          transversion: {
            "version": "0.3.0",
            "atoms": [],
            "cards": [],
            "markups": [],
            "sections": [
              [
                1,
                "p",
                [
                  [0, [], 0, "As I question my beliefs, I don't necessarily have to prove that they are 100% wrong. Since I am trying to find out what I know for sure, all I need to show is that they are doubtful in order to know not to trust them completely. All I need to prove is that they might be wrong. Nor do I have to question all my beliefs one at a time, which could take forever. If I start by questioning my basic beliefs, like pulling oranges from the bottom of the stack, the other loose ones will fall by themselves."]
                ]
              ]
            ]
          },
          summary: 'It is unreasonable to try to doubt everything and anything, without first doubting the source.'
        }
      ]
    ],
    sections: [
      [1, "h2", [
        [0, [], 0, "Meditation I"]
      ]],
      [1, "h3", [
        [0, [], 0, "Of the things which may be brought within the sphere of the doubtful."]
      ]],
      [10, 0],
      [10, 1],
      [
         1,
         "p",
         [
           [
             0,
             [],
             0,
             "Can we link to an author? "
           ],
           [
             1,
             [],
             0,
             0
           ]
         ]
       ]
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
