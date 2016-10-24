import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    error: function(reason) {
      console.log(reason);
      if (reason instanceof DS.AdapterError && reason.errors[0].status == 401) {
        this.get('flashMessages').danger('Login required...');
        this.transitionTo('user.login');
      } else {
        this.get('flashMessages').warning('Something broke!');
      }
    }
  }
});
