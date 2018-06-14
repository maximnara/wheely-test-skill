import Ember from 'ember';

export default Ember.Route.extend({
  title: 'Список машин',
  model() {
    return this.get('store').findAll('car');
  },
});
