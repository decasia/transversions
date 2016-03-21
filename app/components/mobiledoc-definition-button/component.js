import Ember from 'ember';

let { computed, Component, isPresent } = Ember;

export default Component.extend({
  tagName: 'button',
  // classNameBindings: ['isActive:active'],
  // isActive: computed.bool('editor.activeMarkupTagNames.isA'),
  click() {
    let editor = this.get('editor.editor'); // 'editor' points to the ember editor component, which contains an instance of the actual mobiledoc editor class
    if (!editor.range.head) { // only make a definition if text is selected
      return;
    }
    editor.run(postEditor => {
      const term = editor.cursor.selectedText();
      if (!isPresent(term)) { // further sanity check for selected text
        return;
      }

      const definition = postEditor.builder.createAtom("definition-atom", term, {id: 1, name: term});

      postEditor.deleteRange(editor.range);
      postEditor.insertMarkers(editor.range.head, [definition]);
    });
  }
});
