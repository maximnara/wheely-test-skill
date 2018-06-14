import Ember from 'ember';

export default Ember.Route.extend({
  title: 'Новая машина',
  model(params) {
    return Ember.RSVP.hash({
      car: this.store.createRecord('car'),
      colors: this.store.findAll('color'),
      classes: this.store.findAll('class'),
      manufacturers: this.store.findAll('manufacturer'),
    });
  },
  actions: {
    willTransition: function(transition){
      const model = this.modelFor('car.new');
      const car = model ? model.car : null;
      if (model.car.isNew && !model.car.isSaving && car) {
        this.store.deleteRecord(car);
      }
      return true;
    },
  },
});
