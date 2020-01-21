import Ember from 'ember';
import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  lmsRole: DS.attr('string'),
  groupData: DS.attr(),
  name: Ember.computed('firstname', 'lastname', function() {
    const fn = this.get('firstname'), ln = this.get('lastname');
    return `${fn} ${ln}`;
  }),
  currentGroup: Ember.computed.filterBy('groupData', 'current', true),
  currentGroupName: Ember.computed('currentGroup', function() {
    let currentGroup = this.get('currentGroup');
    return currentGroup ? currentGroup[0].name : null;
  })
});
