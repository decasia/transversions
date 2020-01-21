// https://github.com/rails-api/active_model_serializers/blob/master/docs/integrations/ember-and-json-api.md

import ENV from 'transverse/config/environment';

import DS from 'ember-data';

import Ember from 'ember';
const { underscore } = Ember.String;

import { pluralize } from 'ember-inflector';

export default DS.JSONAPIAdapter.extend({
  namespace: ENV.apiNamespace,
  auth: Ember.inject.service(),
  jwtHeader: Ember.computed.alias('auth.jwtHeader'),

  pathForType: function(type) {
    let underscored = underscore(type);
    return pluralize(underscored);
  },

  headers: Ember.computed('jwtHeader', function() {
    let jwtHeader = this.get('auth.jwtHeader');
    if (jwtHeader) {
      return { 'Authorization': jwtHeader };
    } else {
      return {};
    }
  })
});
