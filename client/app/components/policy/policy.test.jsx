import React from 'react';
import { shallow } from 'enzyme';
import Policy from './policy';

const getUnit = (props) => (
  shallow(<Policy {...props} />)
);

describe('Policy', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const wrapper = getUnit({
          policyDetails: {
            policyRef: '123',
            cover: 'allIncl',
            car: 'bmw',
            address: '123 flat, city, postcode',
          },
        },
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
