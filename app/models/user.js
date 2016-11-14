import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  groupData: DS.attr(),
  currentGroup: Ember.computed.filterBy('groupData', 'current', true),
  currentGroupName: Ember.computed('currentGroup', function() {
    let currentGroup = this.get('currentGroup');
    return currentGroup ? currentGroup[0].name : null;
  })
});
