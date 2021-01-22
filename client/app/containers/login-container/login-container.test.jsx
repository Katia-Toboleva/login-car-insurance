import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import { LoginContainer } from './login-container';

const getUnit = (props) => (
  shallow(
      <Router>
        <LoginContainer {...props} />
      </Router>
  ));

describe('LoginContainer', () => {
  describe('render', () => {
    it('should redirect if fetchLoginRequestStatus is success', () => {
      const fn = jest.fn();
      const wrapper = getUnit({
        state: {
          fetchLoginRequestStatus: 'success',
        },
        actions:  {
          fetchLogin: fn,
        }
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('should NOT redirect if fetchLoginRequestStatus is rejected', () => {
      const fn = jest.fn();
      const wrapper = getUnit({
        state: {
          fetchLoginRequestStatus: 'rejected',
        },
        actions:  {
          fetchLogin: fn,
        }
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('should NOT redirect if fetchLoginRequestStatus is pending', () => {
      const fn = jest.fn();
      const wrapper = getUnit({
        state: {
          fetchLoginRequestStatus: 'pending',
        },
        actions:  {
          fetchLogin: fn,
        }
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('handleLoginSubmit', () => {
    it('calls fetchLogin correctly', () => {
      const fn = jest.fn();

      const wrapper = getUnit({
        state: {
          fetchLoginRequestStatus: null,
        },
        actions:  {
          fetchLogin: fn,
        }
      });

      expect(wrapper).toMatchSnapshot();
    });
  });
});
