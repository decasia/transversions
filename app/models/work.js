import DS from 'ember-data';

const {attr, hasMany, belongsTo} = DS;

export default DS.Model.extend({
  docs: hasMany('doc'),
  author: belongsTo('author'),
  name: attr('string'),
  description: attr('string')
});
