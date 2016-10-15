import { Marionette } from '../connect';

import helloTemplate from '../../templates/hello.handlebars';

const HelloView = Marionette.View.extend({
  template: helloTemplate,
  templateHelpers() {},
});

export default HelloView;
