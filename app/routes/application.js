import Ember from 'ember';

export default Ember.Route.extend({
  headData: Ember.inject.service(),
  title: function(tokens) {
    const title = Ember.makeArray(tokens).reverse().join(' - ');
    this.send('setTitle', title);
    return title;
  },
  actions: {
    setTitle(title) {
      this.get('headData').set('title', title);
    },
  }
});
