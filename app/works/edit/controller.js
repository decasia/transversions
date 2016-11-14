import Ember from 'ember';
import blankMobileDoc from 'transverse/utils/blank-mobiledoc';

export default Ember.Controller.extend({
  actions: {
    newDoc(attrs) {
      let model = this.get('model');
      this.store.createRecord('doc', {
        name: attrs.get('name'),
        work: model,
        content: blankMobileDoc()
      }).save((doc) => {
        model.get('docs').pushObject(doc);
      });
    },
    save() {
      this.get('model').save().then((model) => {
        this.get('flashMessages').success('Your changed were saved.');
        this.transitionToRoute('works.show', model);
      }); // TODO error handling
    }
  }
});
