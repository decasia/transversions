import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveChanges() {
      this.get('model').save(); //TODO: error handling
    },
    updateAttribute(field, value) {
      this.get('model').set(field, value);
    }
  }
});
