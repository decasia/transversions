import Ember from 'ember';

export default Ember.Controller.extend({
  auth: Ember.inject.service(),
  loggedIn: Ember.computed.alias('auth.loggedIn'),
  currentUser: Ember.computed.alias('auth.currentUser')
});
