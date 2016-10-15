import { Marionette, Backbone, _ } from './connect';
import Router from './overrides/router';

const AppRouter = Router.extend({
  appRoutes: {
    '': 'home',
    'hello': 'hello',
    'private': 'private',
  }
});

export default AppRouter;
