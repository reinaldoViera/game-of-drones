import {
    START_MATCH,
    SERVER_LOADING,
    ERROR_SERVER_LOADING,
    ADD_PLAYER_1,
    ADD_PLAYER_2,
    RESET_GAME
} from "../constants/matchInProgress";

const initialState = {
    matchId: undefined,
    rounds: [],
    loading: false,
    configurationId: '1',
    error: false,
    winner: undefined,
    player1: undefined,
    player2: undefined,
}

export default (state = initialState, {
    type,
    payload
}) => {
    switch (type) {

        case START_MATCH:
            return { ...payload
            }

        case SERVER_LOADING:
            return {
                ...state,
                error: payload ? false : state.error,
                loading: payload
            }
        case ERROR_SERVER_LOADING:
            return {
                ...state,
                error: payload
            }
        case ADD_PLAYER_1:
            return {
                ...state,
                player1: payload
            }
        case ADD_PLAYER_2:
            return {
                ...state,
                player2: payload
            }
        case RESET_GAME:
            return initialState;
        default:
            return state
    }
}