import React from 'react';
import renderer from 'react-test-renderer';
import App from './index';

describe('render component', () => {
    it('should correct render', () => {
        const wrapper = renderer.create(<App />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
