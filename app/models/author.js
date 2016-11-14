import DS from 'ember-data';
import Ember from 'ember';

const {attr, hasMany} = DS;

export default DS.Model.extend({
  works: hasMany('work'),
  terms: hasMany('term'),
  notes: hasMany('note'),
  name: attr('string'),
  description: attr('string'),

  workSort: ['name'],
  sortedWorks: Ember.computed.sort('works', 'workSort'),

  termSort: ['name'],
  sortedTerms: Ember.computed.sort('terms', 'termSort')
});
