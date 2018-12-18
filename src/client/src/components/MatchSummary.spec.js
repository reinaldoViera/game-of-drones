import React from 'react';
import {
    mount
} from 'enzyme';
import {
    MatchSummary
} from "./MatchSummary";
import renderer from 'react-test-renderer';

const rounds = [{
    winner: 1,
    name: 'Player 1'
}, {
    winner: 2,
    name: 'Player 2'
}, {
    winner: null,
    name: null
}]

describe('Loading component', () => {
    test('should display rounds data', () => {
        const result = renderer.create( 
            <MatchSummary rounds = {rounds} classes = {{}}/>
        ).toJSON();
        expect(result).toMatchSnapshot();
    });
    test('should show winner view', () => {
        const result = renderer.create( 
            <MatchSummary winner={'Player 1'} rounds={rounds} classes = {{}}/>
        ).toJSON();
        expect(result).toMatchSnapshot();
    });
    test('should react to New Game Button', () => {
        const onNewGame = jest.fn();
        const el = mount( <MatchSummary onNewGame={onNewGame} winner={'Player 1'} rounds={rounds} classes = {{}}/>);
        el.find('Button').simulate('click');
        expect(onNewGame.mock.calls.length).toEqual(1);
    })
    
})