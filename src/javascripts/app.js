import Marionette from 'backbone.marionette';
import $ from 'jquery';
import AppLayout from './view';

const app = new Marionette.Application();

app.on('start', () => {
  // set page's layout and render element to page
  app.rootLayout = new AppLayout({ el: '#container' });
  app.rootLayout.render();
});

// Load the application once the DOM is ready, using `jQuery.ready`
$(() => {
  app.start();
});
