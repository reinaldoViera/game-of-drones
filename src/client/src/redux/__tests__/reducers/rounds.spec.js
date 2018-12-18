import roundReducer from '../../reducer/rounds';
import * as actions from '../../constants/rounds'

describe('Reducer for rounds', () => {
    test('should give initial state', () => {
        const state = roundReducer(undefined, {
            type: 'UNHANDLED'
        });
        expect(state).toMatchSnapshot();
    });
    test('should add moves', () => {
        let state = roundReducer(undefined, {
            type: actions.PLAYER_1_MOVE,
            payload: 1
        });
        expect(state).toMatchSnapshot();
        state = roundReducer(undefined, {
            type: actions.PLAYER_2_MOVE,
            payload: 2
        });
        expect(state).toMatchSnapshot();
    });
    test('should add prev round', () => {
        let state = roundReducer({
            "error_progress": false,
            "in_progress": false,
            "p1_move": 1,
            "p2_move": 2,
            "prev_rounds": [{
                winner: 2,
                name: 'Player 2'
            }],
            "winner": false,
        }, {
            type: actions.ADD_PREV_ROUND,
            payload: {
                winner: 2,
                name: 'Player 1',
                moves: []
            }
        });
        expect(state).toMatchSnapshot();
    })


});