import React from 'react';
import Loading from "./Loading";
import renderer from 'react-test-renderer';


describe('Loading component', () => {
    test('should spinner on loading', () => {
        const result = renderer.create( 
            <Loading loading/>
        ).toJSON();
        expect(result).toMatchSnapshot();
    });
    test('should show children on No loading', () => {
        const result = renderer.create( 
            <Loading>
                <div>Should display ME!!!</div>
            </Loading>
        ).toJSON();
        expect(result).toMatchSnapshot();
    });
})