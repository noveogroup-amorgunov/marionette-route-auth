import Marionette from 'backbone.marionette';
import layoutTemplate from '../templates/layout.handlebars';

const AppLayout = Marionette.View.extend({
  template: layoutTemplate,
  templateHelpers() {}
});

export default AppLayout;
