import DS from 'ember-data';
import blankMobileDoc from 'transverse/utils/blank-mobiledoc';

export default DS.Model.extend({
  name: DS.attr('string'),
  example: DS.attr('mobiledoc', {defaultValue: blankMobileDoc()}),
  definition: DS.attr('mobiledoc', {defaultValue: blankMobileDoc()}),
  discussion: DS.attr('mobiledoc', {defaultValue: blankMobileDoc()})
});
