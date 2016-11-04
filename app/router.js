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

  this.route('notes', function() {
    this.route('show', { path: ':note_id' });
  });

  this.route('authors', function() {
    this.route('show', { path: ':author_id' });
    this.route('edit', { path: ':author_id/edit' });
  });
  this.route('works', function() {
    this.route('show', { path: ':work_id' });
    this.route('edit', { path: ':work_id/edit' });
  });

  this.route('user', function() {
    this.route('login');
    this.route('about');
    this.route('token', { path: 'token/:jwt' });
  });

  this.route('not-found', { path: '/*path' });
});

export default Router;
