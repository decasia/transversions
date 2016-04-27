import DS from 'ember-data';
import blankMobileDoc from 'transverse/utils/blank-mobiledoc';

export default DS.Model.extend({
  author: DS.belongsTo('author'),
  name: DS.attr('string'),
  source: DS.attr('mobiledoc', {defaultValue: blankMobileDoc}),
  discussion: DS.attr('mobiledoc', {defaultValue: blankMobileDoc})
});
