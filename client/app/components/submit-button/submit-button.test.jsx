import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from './submit-button';

const getUnit = (props) => (
  shallow(<SubmitButton {...props} />)
);

describe('SubmitButton', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const wrapper = getUnit();

      expect(wrapper).toMatchSnapshot();
    });

    describe('handleMouseEnter', () => {
      it('updates html correctly', () => {
        const wrapper = getUnit();
        wrapper.find('.submit-button').simulate('mouseEnter');

        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('handleMouseLeave', () => {
      it('updates html correctly', () => {
        const wrapper = getUnit();
        wrapper.find('.submit-button').simulate('mouseLeave');

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
