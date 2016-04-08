import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newWork(attrs) {
      let workProperties = attrs.getProperties('name', 'author');
      this.store.createRecord('work', workProperties).save();
    }
  }
});
