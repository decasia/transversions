import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  model: function(params) {
    return params.path;
  },

  redirect: function (model, transition) {
    console.log(`Failed to find route ${model}`);
    this.get('flashMessages').warning("Couldn't find the page you requested.");
    this.transitionTo('index');
  }
});
