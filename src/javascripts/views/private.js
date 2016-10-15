import { Marionette } from '../connect';

import privateTemplate from '../../templates/private.handlebars';

const PrivateView = Marionette.View.extend({
  template: privateTemplate,
  templateHelpers() {},
});

export default PrivateView;
