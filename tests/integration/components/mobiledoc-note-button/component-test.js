import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mobiledoc-note-button', 'Integration | Component | mobiledoc note button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{mobiledoc-note-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#mobiledoc-note-button}}
      template block text
    {{/mobiledoc-note-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
