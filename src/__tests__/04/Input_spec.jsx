import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../03/Input';

describe('<Input>', () => {
    it('has one element', () => {
        const wrapper = shallow(<Input name="test_name" />);
        expect(wrapper.length).toEqual(1);
        expect(wrapper).toHaveLength(1);
    });
});