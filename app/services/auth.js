import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  // TODO this should get set in the ENV
  authUrl: 'http://localhost:4200/auth/user_token',

  jwtHeader: null,
  currentUser: null,
  loggedIn: Ember.computed.notEmpty('currentUser'),

  // This is an observer because we want to make sure we don't try to load
  // the user until all async actions from the JWT cycle have been completed
  // (because otherwise the JWT header won't be set)
  loadUserObserver: function() {
    if (this.get('jwtHeader')) {
      this.loadUser();
    }
  }.observes('jwtHeader'),

  login: function(username, password) {
    let  _this = this,
    url = this.get('authUrl'),
    data = {
      auth: {
        username: username,
        password: password
      }
    };

    return new Ember.RSVP.Promise(function(resolve,reject) {
      Ember.$.ajax({
        type: 'POST',
        url: url,
        data: data,
        success: function(response) {
          _this.set('jwtHeader', `Bearer: ${response.jwt}`);
          resolve(response);
        },
        error: function(reason) {
          reject(reason);
        }
      });
    });
  },

  loadUser: function() {
    this.get('store').queryRecord('user', {self: true}).then(
      (result) => this.set('currentUser', result)
    );
  }
});
