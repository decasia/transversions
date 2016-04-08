import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newAuthor(attrs) {
      this.store.createRecord('author', {
        name: attrs.name
      }).save(); // TODO: error handling
    }
  }
});
