import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { PolicyContainer } from './policy-container';

const getUnit = (props) => (
  mount(
    <Router>
      <PolicyContainer {...props} />
    </Router>
  ));

describe('PolicyContainer', () => {
  describe('render', () => {
    it('should render Policy if fetchPolicyRequestStatus is success', () => {
      const fn = jest.fn();
      const wrapper = getUnit({
        state: {
          fetchPolicyRequestStatus: 'success',
        },
        actions: {
          fetchPolicy: fn,
        }
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('should render error if fetchPolicyRequestStatus is rejected', () => {
      const fn = jest.fn();
      const wrapper = getUnit({
        state: {
          fetchPolicyRequestStatus: 'rejected',
        },
        actions: {
          fetchPolicy: fn,
        }
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('should render Spinner if fetchPolicyRequestStatus is pending', () => {
      const fn = jest.fn();
      const wrapper = getUnit({
        state: {
          fetchPolicyRequestStatus: 'pending',
        },
        actions: {
          fetchPolicy: fn,
        }
      });

      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('useEffect', () => {
    it('should be called when component mounts', () => {
      const fn = jest.fn();
      jest.spyOn(React, 'useEffect').mockImplementation(f => f());


      const wrapper = getUnit({
        state: {
          policyDetails: {
            address: '123 London',
            car: 'bmw',
            policyRef: 'abc',
            cover: 'all',
          },
          fetchPolicyRequestStatus: "success",
        },
        actions: {
          fetchPolicy: fn,
        }
      });

      expect(wrapper).toMatchSnapshot();
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });
});
