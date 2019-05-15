import React from 'react';
import { shallow } from 'enzyme';
import Photo from './Photo';

describe('Photo component', () => {
  it('Renders a Photo', () => {
    const wrapper = shallow(<Photo photo="/path/to/photo" />);
    expect(wrapper).toMatchSnapshot();
  });
});
