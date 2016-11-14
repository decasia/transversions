import Ember from 'ember';
const {computed} = Ember; 

export default Ember.Controller.extend({
  termSort: ['name'],
  sortedTerms: computed.sort('model', 'termSort'),
});
