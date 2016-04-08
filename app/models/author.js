import DS from 'ember-data';

const {attr, hasMany} = DS;

export default DS.Model.extend({
  works: hasMany('work'),
  name: attr('string'),
  description: attr('string')
});
