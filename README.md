# Transversions

This is a piece of custom-built classroom software designed to help students understand difficult texts, such as those of modern philosophy (Descartes, Kant).

A "transversion," a term coined by Paul Kjellberg, is halfway between a "translation" and a "new version" of a text. The idea is that students rewrite each paragraph of the original text in their own words. They supplement this with a brief summary sentence explaining the main point. The pedagogical theory is that learning improves when students try to restate complex ideas on their own.

The software is designed to support multiple students working on the same text. For instance, different students could be assigned to "transvert" different paragraphs of a given text, or they could take turns editing and improving on a single transversion of a given paragraph. The software stores each user's revision separately (though an interface to view the history interactively is still a work in progress).

The software also allows for custom notes and term definitions to be added (as clickable annotations) to the primary text. When the primary source uses unusual technical terms, for instance, it can help to show students handy definitions thereof.

## Screenshots

![Screenshot of Editing UI](/docs/editing-meditation-one.png)

## Why custom software?

One can also set up this sort of interface using other existing tools (MediaWiki custom templates can provide something similar). It's a tradeoff between streamlining the interface for a specific workflow (which a custom UI can facilitate) and providing broader functionality (as with pre-built wiki software).

## How do I use this software?

The front end UI is written in [ember.js](http://emberjs.com/), a Javascript application framework. It stores data (and handles authentication) using a separate back-end server, currently implemented in Ruby on Rails. The two components have to be installed separately.

To install the front end, you would first need a functioning Ember.js development environment (see the Prerequisites section below) and would need to clone this repository to your local workstation. You could then follow the instructions under Deploying to deploy to a web server (which only needs to be able to serve static web assets).

To install the back end, see the [transverse-store](http://github.com/diglibarts/transverse-store) project.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Running / Development

* `ember server --proxy localhost:XYZ`
(Use the --proxy option to connect to a local instance of the back end.)
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

Unfortunately the project time budget was insufficient to develop a front end test framework. PRs welcome.

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Deploying

We use ember-cli-deploy to handle building the project and rsyncing the production build files to the server. The invocation is something like:

`ember deploy production`

You need to define the following variables in a `.env` file:

- `DEPLOY_HOST` - server to deploy to
- `DEPLOY_USER` - user to deploy as
- `DEPLOY_PATH` - server directory to deploy to
- `SSH_AGENT` - must point to your current SSH agent to use your ssh keys.

(The latter is a pain point currently, because this path changes every time you restart ssh-agent.)

## Open Source

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
