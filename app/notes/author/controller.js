import Ember from 'ember';
const {computed} = Ember;

export default Ember.Controller.extend({
  noteSort: ['name'],
  sortedNotes: computed.sort('model.notes', 'noteSort'),
});
