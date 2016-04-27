import Ember from 'ember';

let { computed, Component, isPresent } = Ember;

export default Component.extend({
  store: Ember.inject.service(),
  termSort: ['name'],

  addNoteToSelection(note) {
    const text = this.currentlySelectedText();
    if (!isPresent(text)) { // don't add a definition if nothing's selected
      return;
    }

    let editor = this.get('editor.editor'); // 'editor' points to the ember editor component, which contains an instance of the actual mobiledoc editor class
    editor.run(postEditor => {
      const definition = postEditor.builder.createAtom("note-atom", text, {
        id: note.get('id'),
        name: text
      });
      postEditor.deleteRange(editor.range);
      postEditor.insertMarkers(editor.range.head, [definition]);
    });
  },

  currentlySelectedText() {
    let editor = this.get('editor.editor');
    if (!editor.range.head) {
      return null;
    }
    return editor.cursor.selectedText();
  },

  actions: {
    addNote() {
      const text = this.currentlySelectedText();
      if (!text) {
        return;
      }

      var actionPromise = this.get('options.createNote')(text);
      actionPromise.then((newNote) => {
        this.addNoteToSelection(newNote);
      });
    },
  }
});
