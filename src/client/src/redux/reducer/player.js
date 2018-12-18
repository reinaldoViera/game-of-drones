import {
    ADD_PLAYERS,
    ADD_PLAYER,
    SERVER_LOADING,
    ERROR_SERVER_LOADING,
    UPD_PLAYER
} from "../constants/player";

import commonRed from './common'

const initialState = {
    players: {}
}
export default commonRed(undefined, {
    ADD_ENTITY: ADD_PLAYER, 
    UPD_ENTITY: UPD_PLAYER, 
    ADD_ENTITIES: ADD_PLAYERS,
    SERVER_LOADING,
    ERROR_SERVER_LOADING
}, 'players', initialState)