import View from './overrides/view';

import HeaderView from './views/layout/header';

const AppLayout = View.extend({
  regions: {
    header: '#header',
    main: '#main'
  },

  initialize() {
    this.showChildView('header', new HeaderView());
  }
});

export default AppLayout;
