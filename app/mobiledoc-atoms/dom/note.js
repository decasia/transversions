import Ember from 'ember';
import { ADD_HOOK, REMOVE_HOOK } from 'ember-mobiledoc-editor/components/mobiledoc-editor/component';

export default {
  name: 'note-atom',
  type: 'dom',
  render(atomArg) {
    let {env, options, payload, value} = atomArg;
    let {card, element} = options[ADD_HOOK](atomArg);

    // const element = document.createElement("a");
    // element.className = 'definition-atom label label-info';
    // element.href = `/term/${payload.id}`;
    // element.appendChild(document.createTextNode(`${value}`));
    return element;
  }
};
