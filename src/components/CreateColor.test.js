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
    
    wrapper.find('[name="name"]').at(0).simulate('change', {
      target: { name: 'name', value: 'Blue' }
    });

    expect(wrapper.state('name')).toEqual('Blue');
  });

  it('Cpdates color on change', () => {
    const wrapper = shallow(<CreateColor addColor={jest.fn()} />);

    // Second argument simulates event
    // Since we use name and value we need to provide both
    wrapper.find('[name="color"]').at(0).simulate('change', {
      target: { name: 'color', value: '#FF0000' }
    });

    expect(wrapper.state('color')).toEqual('#FF0000');
  });

  it('Handles submitting a new color', () => {
    const submit = jest.fn();
    const wrapper = shallow(<CreateColor addColor={submit} />);

    // Second argument simulates event
    // since call preventDefault we have to provide that function
    wrapper.find('form').at(0).simulate('submit', {
      preventDefault: jest.fn(),
    });

    expect(submit).toHaveBeenCalledWith({ name: wrapper.state('name'), hex: wrapper.state('color') });
  });
});
