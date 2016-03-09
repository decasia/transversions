import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('docs');

  this.route('doc', function() {
    this.route('show', { path: ':doc_id' });
    this.route('edit', { path: ':doc_id/edit' });
  });
  this.route('terms');

  this.route('term', function() {
    this.route('show', { path: ':term_id' });
  });
});

export default Router;
