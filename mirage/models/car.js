import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  manufacturer: belongsTo(),
  class: belongsTo(),
  color: belongsTo(),
});
