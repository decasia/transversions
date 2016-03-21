import { ADD_HOOK, REMOVE_HOOK } from 'ember-mobiledoc-editor/components/mobiledoc-editor/component';

const RENDER_TYPE = 'dom';

function renderFallback() {
  let element = document.createElement('div');
  element.innerHTML = '[placeholder for Ember component atom]';
  return element;
}

export default function addComponentAtom(atomName) {
  return {
    name: atomName,
    type: RENDER_TYPE,
    render(atomArg) {
      let {env, options} = atomArg;
      if (!options[ADD_HOOK]) {
        return renderFallback();
      }

      let { card, element } = options[ADD_HOOK](atomArg);
      let { onTeardown } = env;

      onTeardown(() => options[REMOVE_HOOK](card));

      return element;
    }
  }
};
