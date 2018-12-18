import {
    ADD_MOVES,
    ADD_MOVE,
    SERVER_LOADING,
    ERROR_SERVER_LOADING,
    UPD_MOVE
} from "../constants/move";

import commonRed from './common'

const initialState = {
    moves: {}
}
export default commonRed(undefined, {
    ADD_ENTITY: ADD_MOVE, 
    UPD_ENTITY: UPD_MOVE, 
    ADD_ENTITIES: ADD_MOVES,
    SERVER_LOADING,
    ERROR_SERVER_LOADING
}, 'moves', initialState)