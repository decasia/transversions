import Ember from 'ember';

let { computed, Component } = Ember;

export default Component.extend({
  tagName: 'button',
  // classNameBindings: ['isActive:active'],
  // isActive: computed.bool('editor.activeMarkupTagNames.isA'),
  click() {
    let editor = this.get('editor.editor'); // don't ask me why the editor is a property of itself, but it is.
    editor.run(postEditor => {
      const term = editor.cursor.selectedText(),
            mention = postEditor.builder.createAtom("definition-atom", term, {});
      postEditor.deleteRange(editor.range);
      postEditor.insertMarkers(editor.range.head, [mention]);
    });
  }
});
