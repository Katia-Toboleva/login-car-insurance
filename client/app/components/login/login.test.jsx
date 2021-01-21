import React from 'react';
import { shallow } from 'enzyme';
import Login from './login';

const getUnit = (props) => (
  shallow(<Login {...props} />)
);

describe('Login', () => {
  describe('render', () => {
    it('should render correctly with default values(pending status)', () => {
      const wrapper = getUnit();

      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly with loginStatus rejected', () => {
      const wrapper = getUnit({ loginStatus: 'rejected' });

      expect(wrapper).toMatchSnapshot();
    });
  });
});
