import Ember from 'ember';

export default Ember.Controller.extend({
  allowNewTransversions: true, // TODO: wire up to user acct
  actions: {
    saveChanges() {
      this.get('model').save(); //TODO: error handling
    },
    updateAttribute(field, value) {
      this.get('model').set(field, value);
    },
    createRecord(type, name) { // this works on terms and notes
      Ember.assert('Must pass a valid type', type == 'term' || type == 'note')
      // we have to load the author of our document, which is async,
      // and then we have to save the record, also async.
      // so this method returns a promise.
      return this.get('model.work.author').then( (author) => {
        const newRecord = this.get('store').createRecord(type, {
          name: name,
          author: author
        });
        return newRecord.save();
      }); // TODO: error handling
    }
  }
});
