import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  groupData: DS.attr()
});
