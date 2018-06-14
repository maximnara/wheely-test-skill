import Ember from 'ember';
const { inject: { service } } = Ember;

export default Ember.Component.extend({
  navigator: service('navigator'),
  isCreateNewCarButtonDisabled: Ember.computed('navigator.secondaryRoute', function () {
    return 'new' == this.get('navigator.secondaryRoute');
  }),
  isBackButtonActive: Ember.computed('navigator.secondaryRoute', function () {
    return 'list' != this.get('navigator.secondaryRoute');
  }),
  actions: {
    createNewCar() {
      this.sendAction('createNewCar');
    },
    goToList() {
      this.sendAction('goToList');
    },
  },
});
