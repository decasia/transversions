import Ember from 'ember';
import MobiledocEditor from 'ember-mobiledoc-editor/components/mobiledoc-editor/component';

export default MobiledocEditor.extend({
  editableComponentCards: Ember.computed.filter('componentCards', (component) => component.callbacks.edit),
  componentAtoms: Ember.computed.filter('componentCards', (component) => !component.callbacks.edit)
});
