import {
    PLAYER_1_MOVE, PLAYER_2_MOVE, ADD_PREV_ROUND, SERVER_LOADING, ERROR_SERVER_LOADING, RESET_GAME
} from "../constants/rounds";


function prevRoundReducer(state = [], { type, payload}) {
    switch (type) {
        case ADD_PREV_ROUND:
            return [
                ...state,
                {
                    winner: payload.winner,
                    name: payload.name,
                    moves: payload.moves
                }
            ]
        default:
            return state
    }
}


const initialState = {
    p1_move: undefined,
    p2_move: undefined,
    in_progress: false,
    error_progress: false,
    winner: false,
    prev_rounds: []
}

export default (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        case SERVER_LOADING:
            return {
                ...state,
                error_progress: payload ? false : state.error_progress,
                in_progress: payload
            }
        case ERROR_SERVER_LOADING:
            return {
                ...state,
                in_progress: payload
            }
        case PLAYER_1_MOVE:
            return { 
                ...state,
                p1_move: payload
            }
        case PLAYER_2_MOVE:
            return { 
                ...state,
                p2_move: payload
            }
        case ADD_PREV_ROUND:
            return {
                p1_move: undefined,
                winner: payload.matchWinner ? payload.matchWinner : state.winner,
                p2_move: undefined,
                prev_rounds: prevRoundReducer(state.prev_rounds, { type, payload })
            }
        case RESET_GAME:
            return initialState;
        default:
            return state
    }
}