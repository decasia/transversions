import Ember from 'ember';

export default Ember.Controller.extend({
  auth: Ember.inject.service(),
  loggedIn: Ember.computed.alias('auth.loggedIn'),
  currentUser: Ember.computed.alias('auth.currentUser'),
  flashMessages: Ember.inject.service(),

  actions: {
    chooseGroup(newGroupId) {
      this.get('auth').changeGroup(newGroupId).then(
        (result) => {
          this.get('flashMessages').success('Your new group is now active.');
        },
        (reason) => {
          this.get('flashMessages').danger('Your group could not be changed.');
        }
      );
    }
  }
});
