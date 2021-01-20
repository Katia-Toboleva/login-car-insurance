import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';

const getUnit = (props) => (
  shallow(<Button {...props} />)
);

describe('Button', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const wrapper = getUnit();

      expect(wrapper).toMatchSnapshot();
    });

    describe('handleMouseEnter', () => {
      it('updates html correctly', () => {
        const wrapper = getUnit();
        wrapper.find('.button').simulate('mouseEnter');

        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('handleMouseLeave', () => {
      it('updates html correctly', () => {
        const wrapper = getUnit();
        wrapper.find('.button').simulate('mouseLeave');

        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('handleButtonClick', () => {
      it('calls props.onClick', () => {
        const cb = jest.fn();
        const type = 'login';
        const wrapper = getUnit({ onClick: cb, type });
        wrapper.find('.button').simulate('click');

        expect(cb).toHaveBeenCalledWith(type);
      });
    });
  });
});
