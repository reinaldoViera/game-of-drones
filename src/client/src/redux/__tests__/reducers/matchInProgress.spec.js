import matchInProgressReducer from '../../reducer/matchInProgress'
import * as actions from '../../constants/matchInProgress'

describe('Reducer for Match In progress', () => {
    test('should give inital state', () => {
        const state = matchInProgressReducer(undefined, {
            type: 'UNHANDLED'
        });
        expect(state).toMatchSnapshot()
    });
    test('should add Players', () => {
        let state = matchInProgressReducer(undefined, {
            type: actions.ADD_PLAYER_1,
            payload: 1
        });
        expect(state).toMatchSnapshot()
        state = matchInProgressReducer(undefined, {
            type: actions.ADD_PLAYER_2,
            payload: 2
        });
        expect(state).toMatchSnapshot()
    })

})