import React from 'react';
import { shallow } from 'enzyme';
import Text from './text';

const getUnit = (props) => (
  shallow(<Text {...props} />)
);

describe('Text', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const wrapper = getUnit();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
