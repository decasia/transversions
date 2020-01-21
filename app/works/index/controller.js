import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newWork(attrs) {
      let workProperties = attrs.getProperties('name', 'author');

      if (!workProperties.author || workProperties.author === 'none') {
        this.get('flashMessages').danger("Can't create a work without an author.");
      } else {
        this.store.createRecord('work', workProperties).save();
      }
    }
  }
});
