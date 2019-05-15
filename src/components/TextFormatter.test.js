import React from 'react';
import { shallow } from 'enzyme';
import TextFormatter from './TextFormatter';

describe('TextFormatter component', () => {
  it('renders a TextFormatter', () => {
    const wrapper = shallow(<TextFormatter />);
    expect(wrapper).toMatchSnapshot();
  });
});
