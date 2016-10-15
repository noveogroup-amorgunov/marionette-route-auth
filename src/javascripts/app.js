import { Marionette, Backbone, $ } from './connect';

import AppLayout from './view';
import AppController from './controller';
import AppRouter from './router';

const app = new Marionette.Application();

app.on('start', () => {
  // set page's layout and render element to page
  const layout = new AppLayout({ el: '#container' });
  // layout.render();

  const controller = new AppController({ layout });

  app.router = new AppRouter({ controller, layout });
  Backbone.history.start({ pushState: true });


  window.layout = layout;
  window.controller = controller;
});

// Load the application once the DOM is ready, using `jQuery.ready`
$(() => {
  app.start();
});

window.app = app;

window.isAutorized = (opt => opt.success());
