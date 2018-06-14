import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function(model) {
    const number = model.car.number;
    return `Редактирование машины ${number}`;
  },
  model(params) {
    return Ember.RSVP.hash({
      car: this.store.find('car', params.id),
      colors: this.store.findAll('color'),
      classes: this.store.findAll('class'),
      manufacturers: this.store.findAll('manufacturer'),
    });
  },
});
