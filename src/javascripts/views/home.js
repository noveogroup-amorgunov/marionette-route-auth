import { Marionette } from '../connect';

import homeTemplate from '../../templates/home.handlebars';

const HomeView = Marionette.View.extend({
  template: homeTemplate,
  templateHelpers() {},
});

export default HomeView;
