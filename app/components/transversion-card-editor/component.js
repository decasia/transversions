import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['transversion-card'],
  updatedData: {},
  actions: {
    saveTransversion: function() {
      var original = this.get('data'),
          updated = this.get('updatedData');

      this.sendAction('saveCard', {
        summary: updated.summary || original.summary,
        source: updated.source || original.source,
        transversion: updated.transversion || original.transversion
      });
    },
    updateAttribute: function(attribute, value) {
      this.updatedData[attribute] = value;
    },
  }
});
