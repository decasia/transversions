import Ember from 'ember';
import Range from 'mobiledoc-kit/utils/cursor/range';
import blankMobileDoc from 'transverse/utils/blank-mobiledoc';
let { Component } = Ember;

function newTransversionCard(text) {
  let source = blankMobileDoc();
  if (text) { // Only prepopulate text if there is any!
    source.sections = [
      [
        1,
        "p",
        [[0,[],0,text]]
      ]
    ];
  }
  return {
    summary: '',
    transversion: blankMobileDoc(),
    source: source
  };
}

export default Component.extend({
  setupHotkey: function() {
    let editor = this.get('editor.editor');
    if (editor) {
      editor.registerKeyCommand({
        str: 'CTRL+T',
        run: (editor) => this.addTransversion()
      });
    }
  }.on('init'),

  currentlySelectedText() {
    let editor = this.get('editor.editor');
    if (!editor.range.head) {
      return null;
    }
    return editor.cursor.selectedText();
  },

  addTransversion() {
    const editorComponent = this.get('editor'),
          editor = editorComponent.editor,
          section = editor.range.head.section;

    if (section) {
      // Remove text before adding it as a transversion!
      editor.run(postEditor => {
        editor.selectSections([section]);
        const text = editor.cursor.selectedText(),
              range = editor.range;

        editorComponent.addCard('transversion-card', newTransversionCard(text));
        postEditor.removeSection(section);
      });
    } else {
      editorComponent.addCard('transversion-card', newTransversionCard(text));
    }
  },

  click() {
    this.addTransversion();
  }
});
