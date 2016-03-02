import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mobiledoc-definition-button', 'Integration | Component | mobiledoc definition button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{mobiledoc-definition-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#mobiledoc-definition-button}}
      template block text
    {{/mobiledoc-definition-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
