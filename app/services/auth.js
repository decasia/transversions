import Ember from 'ember';
import ENV from 'transverse/config/environment';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  authUrl: ENV.authTokenRoute,
  changeGroupUrl: ENV.authChangeGroupRoute,

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
    let _this = this,
        url   = this.get('authUrl'),
        data  = {
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
          _this.setupToken(response.jwt);
          resolve(response);
        },
        error: function(reason) {
          reject(reason);
        }
      });
    });
  },

  changeGroup: function(newGroupId) {
    let _this   = this,
        url     = this.get('changeGroupUrl'),
        data    = { group_id: newGroupId },
        headers = { 'Authorization': this.get('jwtHeader') };

    return new Ember.RSVP.Promise(function(resolve,reject) {
      Ember.$.ajax({
        type: 'POST',
        url: url,
        data: data,
        headers: headers,
        success: function(response) {
          _this.get('store').unloadAll(); // clears all existing data.
          _this.loadUser();
          resolve(response);
        },
        error: function(reason) {
          reject(reason);
        }
      });
    });

  },

  setupToken: function(token) {
    this.setHeader(token);
    window.sessionStorage.setItem('jwt', token);
  },

  setHeader: function(token) {
    this.set('jwtHeader', `Bearer: ${token}`);
  },

  loadUser: function() {
    this.get('store').queryRecord('user', {self: true}).then(
      (result) => this.set('currentUser', result)
    );
  }
});
