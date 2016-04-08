import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newWork(name) {
      let model = this.get('model');
      console.log('trying');
      this.store.createRecord('work', {
        name: name,
        author: model
      }).save((work) => {
        model.get('works').pushObject(work);
        console.log('done');
      });
    }
  }
});
