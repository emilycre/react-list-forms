import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color Component', () => {
  it('Renders a Color', () => {
    const rgb = {
      red: 0,
      green: 0,
      blue: 255
    };

    const wrapper = shallow(<Color name="Blue" rgb={rgb} />);
    expect(wrapper).toMatchSnapshot();
  });
});
