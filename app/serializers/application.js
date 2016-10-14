// https://github.com/rails-api/active_model_serializers/blob/master/docs/integrations/ember-and-json-api.md

import Ember from 'ember';
import DS from 'ember-data';
var underscore = Ember.String.underscore;

export default DS.JSONAPISerializer.extend({
  keyForAttribute: function(attr) {
    return underscore(attr);
  },

  keyForRelationship: function(rawKey) {
    return underscore(rawKey);
  }
});
