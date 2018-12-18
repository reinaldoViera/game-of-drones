import React from 'react';
import {
    mount
} from 'enzyme';
import NewPlayer from "./NewPlayer";

describe('NewPlayer component', () => {
    test('should react to input event', () => {
        const checkName = () => true;
        const el = mount(
            <NewPlayer open checkName={checkName}/>
        );
        el.find('input').simulate('change', { target: { value: 'New name'}});
        el.update();
        expect(el.state().name).toEqual('New name');
        expect(el.state().valid).toEqual(true);
    });
    test('should invalid is function requires it', () => {
        const checkName = () => false;
        const el = mount(
            <NewPlayer open checkName={checkName}/>
        );
        el.find('input').simulate('change', { target: { value: 'New name'}});
        el.update();
        expect(el.state().valid).toEqual(false);
    });

})