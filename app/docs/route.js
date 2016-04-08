import Ember from 'ember';
import blankMobileDoc from 'transverse/utils/blank-mobiledoc';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('doc');
  },
  actions: {
    newDocument() {
      const name = prompt("Please enter the document name");
      if (name) {
        this.get('store').createRecord('doc', {
          name: name,
          content: blankMobileDoc()
        }).save();
      }

    }
  }
});
