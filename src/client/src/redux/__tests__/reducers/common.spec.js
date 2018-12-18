import commonReducer from '../../reducer/common'
const actions = {
    ADD_ENTITY: 'ADD_ENTITY',
    UPD_ENTITY: 'UPD_ENTITY',
    ADD_ENTITIES: 'ADD_ENTITIES',
    SERVER_LOADING: 'SERVER_LOADING',
    ERROR_SERVER_LOADING: 'ERROR_SERVER_LOADING',
}
const customReducer = commonReducer(undefined, actions, 'players', {
    players: {}
})
describe('Common reducer', () => {
    test('should give initial state', () => {
        const state = customReducer(undefined, {
            type: "UNHANDLED"
        });
        expect(state).toMatchSnapshot()
    });
    test('should add Entities', () => {
        const state = customReducer(undefined, {
            type: actions.ADD_ENTITIES,
            payload: {
                'p1Id': {
                    id: 'p1Id',
                    name: 'Player1'
                },
                'p2Id': {
                    id: 'p2Id',
                    name: 'Player2'
                }
            }
        });
        expect(state).toMatchSnapshot()
    });
    test('should add Entities to existing state', () => {
        const state = customReducer({
            error: false,
            loading: false,
            players: {
                'p1Id': {
                    id: 'p1Id',
                    name: 'Player1'
                },
                'p2Id': {
                    id: 'p2Id',
                    name: 'Player2'
                }
            }
        }, {
            type: actions.ADD_ENTITIES,
            payload: {
                'p3Id': {
                    id: 'p3Id',
                    name: 'Player3'
                },
                'p4Id': {
                    id: 'p4Id',
                    name: 'Player4'
                }
            }
        });
        expect(state).toMatchSnapshot()
    });

})