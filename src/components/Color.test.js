import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color Component', () => {
  it('Renders a Color', () => {
    const wrapper = shallow(<Color name="Blue" hex="#0000FF" />);
    expect(wrapper).toMatchSnapshot();
  });
});
