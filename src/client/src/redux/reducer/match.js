import {
    ADD_MATCHS,
    ADD_MATCH,
    SERVER_LOADING,
    ERROR_SERVER_LOADING,
    UPD_MATCH
} from "../constants/match";

import commonRed from './common'

const initialState = {
    matchs: {}
}
export default commonRed(undefined, {
    ADD_ENTITY: ADD_MATCH, 
    UPD_ENTITY: UPD_MATCH, 
    ADD_ENTITIES: ADD_MATCHS,
    SERVER_LOADING,
    ERROR_SERVER_LOADING
}, 'matchs', initialState)