import Ember from 'ember';

export default Ember.Controller.extend({
  flashMessages: Ember.inject.service(),
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
      this.get('model').save().then((model) => {
        this.get('flashMessages').success('Your changed were saved.');
        this.transitionToRoute('authors.show', model);
      }); // TODO error handling
    }
  }
});
