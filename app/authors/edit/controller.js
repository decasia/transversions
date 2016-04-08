import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newWork(attrs) {
      let model = this.get('model');
      this.store.createRecord('work', {
        name: attrs.get('name'),
        author: model
      }).save((work) => {
        model.get('works').pushObject(work);
      });
    },
    save() {
      this.get('model').save(); // TODO error handling
    }
  }
});
