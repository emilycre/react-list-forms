import React from 'react';
import { shallow } from 'enzyme';
import Photos from './Photos';

describe('Photos component', () => {
  it('Renders a Photos', () => {
    const photos = [
      '/img1',
      'img2',
      'img3'
    ];
    const wrapper = shallow(<Photos photos={photos} />);
    expect(wrapper).toMatchSnapshot();
  });
});
