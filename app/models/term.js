import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  example: DS.attr('mobiledoc'),
  definition: DS.attr('mobiledoc'),
  discussion: DS.attr('mobiledoc')
});
