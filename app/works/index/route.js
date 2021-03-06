import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('work').then((works) => works.sortBy('name'));
  },
  setupController(controller, model) {
    controller.set('model', model);
    this.store.findAll('author').then(
      function(authors) {
        controller.set('authors', authors.sortBy('name'));
        controller.set('defaultAuthor', authors[0]);
      }
    );
  }
});
