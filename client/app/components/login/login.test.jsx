import React from 'react';
import { mount } from 'enzyme';
import Login from './login';

const getUnit = (props) => (
  mount(<Login {...props} />)
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

  describe('handleLoginSubmit', () => {
    it('should call onLoginSubmit', () => {
      const cb = jest.fn();
      const wrapper = getUnit({ onLoginSubmit: cb });
      const form = wrapper.find('form').at(0);
      form.simulate('submit',
        { preventDefault () {} }
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
