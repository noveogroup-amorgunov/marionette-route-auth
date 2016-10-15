import { Marionette } from '../connect';

const BaseView = Marionette.View.extend({
  close() {
    this.remove();
    this.unbind();
    if (this.onClose) {
      this.onClose();
    }
  }
});

export default BaseView;
