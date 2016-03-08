import Ember from 'ember';
import createComponentCard from 'ember-mobiledoc-editor/utils/create-component-card';

export function mobiledocCardsList() {
  return [createComponentCard('transversion-card')];
}

export default Ember.Helper.helper(mobiledocCardsList);
