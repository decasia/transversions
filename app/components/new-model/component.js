import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  editing: false,
  modelAttrs: Ember.computed('defaults', function() {
    return Ember.Object.create(this.get('defaults'))
  }),
  actions: {
    setAttr(name, value) {
      this.get('modelAttrs').set(name, value);
    },
    newModel() {
      this.toggleProperty('editing');
    },
    createModel() {
      let attrs = this.get('modelAttrs'),
          type = this.get('type');
      if (attrs.name) {
        this.sendAction('action', attrs);
        this.set('editing', false);
        this.set('name', null);
      }
    }
  },
});
