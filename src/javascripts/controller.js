import { Backbone } from './connect';

import Controller from './overrides/controller';

import HelloView from './views/hello';
import HomeView from './views/home';
import PrivateView from './views/private';

// const Controller = Marionette.Object.extend({});

const AwesomeController = Controller.extend({
  // Action that need authentication and if user is not authenticated
  // gets redirect to login page
  requresAuth() {
    return [
      'logout',
      'private'
    ];
  },

  // Routes that should not be accessible if user is authenticated
  // for example, login, register, forgetpasword ...
  preventAccessWhenAuth() {
    return [
      'login',
      'hello',
    ];
  },

  private() {
    this.changeView(new PrivateView());
  },

  home() {
    this.changeView(new HomeView());
  },

  hello() {
    this.changeView(new HelloView());
  },

  login() {
    this.changeView(new HelloView()); // LoginLayout
  },

  logout() {
    // Backbone.Radio.channel('app').request('session').logout({}, {
    //   success: () => Backbone.history.navigate('', { trigger: true })
    // });

    console.log('log out');
    return this.redirect('/');
  },
});

export default AwesomeController;
