import Ember from 'ember';
const {computed} = Ember;

export default Ember.Controller.extend({
  sortBy: ['name'],
  sortedAuthors: computed.sort('model', 'sortBy')
});
