import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  content: DS.attr('mobiledoc'),
  serializedContent: function() {
    return JSON.stringify(this.get('content'), null, '  ');
  }.property('content')
});
