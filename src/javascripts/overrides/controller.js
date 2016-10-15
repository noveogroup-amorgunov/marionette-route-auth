import { Marionette, Backbone, _ } from '../connect';

const BaseController = Marionette.Object.extend({
  initialize(props) {
    this.layout = props.layout;
  },

  destroy() {
    this.stopListening();
    return this;
  },

  redirect(fragment, opts = { trigger: true }) {
    Backbone.history.navigate(fragment, opts);
  },

  // if route is changed, current view will be changed too
  changeView(view) {
    // Close and unbind any existing page view
    if (this.currentView && _.isFunction(this.currentView.close)) {
      this.currentView.close();
    }

    // Establish the requested view into scope
    this.currentView = view;

    // Re-delegate events (unbound when closed)
    this.currentView.delegateEvents(this.currentView.events);

    this.layout.showChildView('main', view);
  },

  checkAccess(filter, opt = {}, next) {
    console.log('checkAccess');
    // Need to be authenticated before rendering view.
    // For cases like a user's settings page where we need to double check against the server.
    if (opt.requiresAuth || opt.preventAccessWhenAuth) {
        window.isAutorized({
          success: (() => {
            console.info('autorize');
            if (opt.preventAccessWhenAuth) {
              this.redirect('/');
            } else {
              next();
            }
          }),
          error: (() => {
            if (opt.requiresAuth) {
              console.error('you\'re not autorized');
              this.redirect('/');
            } else {
              next();
            }
          })
        });
    } else {
      next();
    }
  },

});

export default BaseController;
