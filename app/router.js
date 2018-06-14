import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('car', { path: '/car' }, function () {
    this.route('list', { path: '/' });
    this.route('edit', { path: '/:id' });
    this.route('new', { path: '/new' });
  });
});

export default Router;
