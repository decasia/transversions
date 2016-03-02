import Ember from 'ember';

let { computed, Component } = Ember;

export default Component.extend({
  tagName: 'button',
  // classNameBindings: ['isActive:active'],
  // isActive: computed.bool('editor.activeMarkupTagNames.isA'),
  click() {
    let editor = this.get('editor.editor'); // editor is actually an instance of "postEditor", which contains an "editor"
    editor.run(postEditor => {
      const term = editor.cursor.selectedText(),
            mention = postEditor.builder.createAtom("definition-atom", term, {});
      postEditor.deleteRange(editor.range);
      postEditor.insertMarkers(editor.range.head, [mention]);
    });
  }
});
