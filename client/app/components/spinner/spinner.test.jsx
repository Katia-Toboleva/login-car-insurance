import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './spinner';

const getUnit = (props) => (
  shallow(<Spinner {...props} />)
);

describe('Text', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const wrapper = getUnit();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
