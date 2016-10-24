import Ember from 'ember';

export default Ember.Controller.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  username: null,
  password: null,

  valid: Ember.computed.and('username', 'password'),

  actions: {
    login: function() {
      this.get('auth').login(this.get('username'), this.get('password'))
      .then(
        // function() {console.log('got it'); },
        // function(reason) { console.log(reason);}
        (success) => this.send('success'),
        (failure) => this.get('flashMessages').warning('Invalid credentials.')
      );
    },
    success: function() {
      this.get('flashMessages').success('Login successful!');
      this.transitionToRoute('index');
    }
  }
});
