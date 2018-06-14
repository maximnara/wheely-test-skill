import Ember from 'ember';

export default Ember.Component.extend({
  click() {
    this.sendAction('onClick', this.car.id);
  },
  actions: {
    deleteCar(e) {
      e.stopPropagation();
      this.sendAction('deleteCar', this.car);
    },
  },
});
