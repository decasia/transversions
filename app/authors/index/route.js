import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('author').then((authors) => authors.sortBy('name'));
  }
});