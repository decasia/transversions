import Ember from 'ember';

let { computed, Component, isPresent } = Ember;

export default Component.extend({
  store: Ember.inject.service(),
  showPicker: false,
  availableTerms: function() {
     // should filter for this document's glossary
    return this.get('store').findAll('term');
  }.property(),
  termSort: ['name'],
  sortedTerms: computed.sort('availableTerms', 'termSort'),

  addTermToSelection(term) {
    const text = this.currentlySelectedText();
    if (!isPresent(text)) { // don't add a definition if nothing's selected
      return;
    }

    let editor = this.get('editor.editor'); // 'editor' points to the ember editor component, which contains an instance of the actual mobiledoc editor class
    editor.run(postEditor => {
      const definition = postEditor.builder.createAtom("definition-atom", text, {
        id: term.get('id'),
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
    addDefinition() {
      const text = this.currentlySelectedText();
      if (!text) {
        return;
      }

      this.get('store').findAll('term').then( (terms) => {
        const existingTerm = terms.findBy('name', text);
        if (existingTerm) {
          this.addTermToSelection(existingTerm);
        } else {
          this.set('candidateText', text);
          this.set('showPicker', true);
        }
      });
    },
    cancelPicker() {
      this.set('showPicker', false);
    },
    pickTerm(existingTerm) {
      this.addTermToSelection(existingTerm);
      this.set('showPicker', false);
    },
    newTerm(name) {
      var actionPromise = this.get('options.createTerm')(name);
      actionPromise.then((newTerm) => {
        this.addTermToSelection(newTerm);
        this.set('showPicker', false);
      });
    }
  }
});
