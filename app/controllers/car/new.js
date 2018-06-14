import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveCar() {
      this.model.car.save();
      this.transitionToRoute('car.list');
    },
  },
});
