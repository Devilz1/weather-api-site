import React from 'react';
import renderer from 'react-test-renderer';

import {Home} from './index';

describe('Home', () => {
    it('should render', () => {
        const wrapper = renderer.create(<Home setTitle={jest.fn()} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
