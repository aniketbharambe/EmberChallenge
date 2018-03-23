import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('redefining-web', 'Integration | Component | redefining web', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{redefining-web}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#redefining-web}}
      template block text
    {{/redefining-web}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
