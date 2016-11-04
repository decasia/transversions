import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  model(params) {
    let jwt = params.jwt;
    this.get('auth').setupToken(jwt);
    this.get('flashMessages').success('Login successful!');
    this.transitionTo('index');
  },
});
