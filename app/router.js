import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('docs', function() {
    this.route('show', { path: ':doc_id' });
    this.route('edit', { path: ':doc_id/edit' });
  });
  
  this.route('terms');

  this.route('term', function() {
    this.route('show', { path: ':term_id' });
  });
  this.route('authors', function() {
    this.route('show', { path: ':author_id' });
    this.route('edit', { path: ':author_id/edit' });
  });
  this.route('works', function() {
    this.route('show', { path: ':work_id' });
    this.route('edit', { path: ':work_id/edit' });
  });
});

export default Router;
