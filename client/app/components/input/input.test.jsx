import React from 'react';
import { mount } from 'enzyme';
import Input from './input';

const getUnit = (props) => (
  mount(<Input {...props} />)
);

describe('Input', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const wrapper = getUnit();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('handleChange', () => {
    it('updates html correctly', () => {
      const wrapper = getUnit();
      const value = 'a';
      wrapper.find('.input__body').simulate('change', {
        currentTarget: { value },
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('calls props.onChange with correct value', () => {
      const cb = jest.fn();
      const value = 'a';
      const wrapper = getUnit({ onChange: cb, value });
      wrapper.find('.input__body').simulate('change', {
        currentTarget: { value },
      });

      expect(cb).toHaveBeenCalledTimes(1);
    });
  });

  describe('handleInputKeyUp', () => {
    it('calls props.onKeyUp() once when Enter is pressed', () => {
      const cb = jest.fn();
      const wrapper = getUnit({ onKeyUp: cb });
      wrapper.find('.input__body').simulate('keyup', {
        keyCode: 13,
      });

      expect(cb).toHaveBeenCalledTimes(1);
    });
  });

  describe('handleInputFocus', () => {
    it('updates html correctly', () => {
      const wrapper = getUnit();
      wrapper.find('.input__body').simulate('focus');

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('handleInputBlur', () => {
    it('updates html correctly', () => {
      const wrapper = getUnit();
      wrapper.find('.input__body').simulate('blur');

      expect(wrapper).toMatchSnapshot();
    });
  });
});
