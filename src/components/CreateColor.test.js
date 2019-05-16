import React from 'react';
import { shallow } from 'enzyme';
import CreateColor from './CreateColor';


describe('CreateColor Component', () => {
  it('Renders a CreateColor', () => {
    const wrapper = shallow(<CreateColor addColor={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Updates name on change', () => {
    const wrapper = shallow(<CreateColor addColor={jest.fn()} />);
    
    // Second argument simulates event
    // since we use name and value we need to provide both
    wrapper.find('[name="name"]').at(0).simulate('change', {
      target: { name: 'name', value: 'Blue' }
    });
  });
});
