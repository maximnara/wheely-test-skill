import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toRoute() {
      this.transitionToRoute.call(this, ...arguments);
      return true;
    },
  },
});
