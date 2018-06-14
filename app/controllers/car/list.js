import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showCar(id) {
      this.transitionToRoute('car.edit', id);
    },
    deleteCar(car) {
      car.destroyRecord().then(() => {
        this.get('store').unloadRecord(car);
      });

      //this.get('model').reload();
    },
  },
});
