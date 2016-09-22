import Backbone from 'backbone';
import AppLayout from '../src/javascripts/view';

describe('Rendering the main layout', () => {
  it('renders correctly', () => {
    const layout = new AppLayout();
    layout.render();

    expect(layout.$el.find('h1').length);
    expect(layout.$el.find('h1').text()).equal('Hello from Marionette');
  });
});

describe('Example of loading a JSON fixture', () => {
  it('will create a model from a loaded JSON', () => {
    const model = new Backbone.Model({ name: 'John' });
    expect(model.get('name')).to.equal('John');
  });
});
