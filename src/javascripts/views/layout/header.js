/* global window */
import { Marionette, Backbone } from '../../connect';
import headerTemplate from '../../../templates/header.handlebars';

const HeaderView = Marionette.View.extend({
  template: headerTemplate,
  templateHelpers() {},

  addActiveLinkClass() {
    const fragment = window.location.pathname.substr(1) || '';

    this.ui.nav.find('a')
      .removeClass('selected')
      .filter(`[href="#${fragment || ''}"]`)
      .addClass('selected');
  },

  initialize() {
    Backbone.history.on('all', () => this.addActiveLinkClass());
  },

  ui: {
    home: '.home',
    hello: '.hello',
    private: '.private',
    nav: '.nav'
  },

  events: {
    'click @ui.home': 'gotoHomePage',
    'click @ui.hello': 'gotoHelloPage',
    'click @ui.private': 'gotoPrivatePage',
  },

  gotoPrivatePage(event) {
    event.preventDefault();
    Backbone.history.navigate('private', { trigger: true });
  },

  gotoHomePage(event) {
    event.preventDefault();
    Backbone.history.navigate('/', { trigger: true });
  },

  gotoHelloPage(event) {
    event.preventDefault();
    Backbone.history.navigate('hello', { trigger: true });
  }
});

export default HeaderView;
