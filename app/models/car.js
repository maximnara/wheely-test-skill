import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('string'),
  year: DS.attr('number'),
  manufacturer: DS.belongsTo(),
  class: DS.belongsTo(),
  color: DS.belongsTo(),
});
