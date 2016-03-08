import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('transversion-card-editor', 'Integration | Component | transversion card editor', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{transversion-card-editor}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#transversion-card-editor}}
      template block text
    {{/transversion-card-editor}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
