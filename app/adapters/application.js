// https://github.com/rails-api/active_model_serializers/blob/master/docs/integrations/ember-and-json-api.md

import DS from 'ember-data';

import Ember from 'ember';
const { underscore, pluralize } = Ember.String;

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  pathForType: function(type) {
    let underscored = underscore(type);
    return pluralize(underscored);
  }
});
