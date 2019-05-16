import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('Sidebar Component', () => {
  it('Renders a Sidebar', () => {
    const wrapper = shallow(
      <Sidebar>
        <a href="Hello.">Testing...</a>
      </Sidebar>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
