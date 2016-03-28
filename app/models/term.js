import DS from 'ember-data';

const emptyMobileDoc = {
  version: "0.3.0",
  markups: [],
  atoms: [],
  cards: [],
  sections: []
};

export default DS.Model.extend({
  name: DS.attr('string'),
  example: DS.attr('mobiledoc', {defaultValue: emptyMobileDoc}),
  definition: DS.attr('mobiledoc', {defaultValue: emptyMobileDoc}),
  discussion: DS.attr('mobiledoc', {defaultValue: emptyMobileDoc})
});
