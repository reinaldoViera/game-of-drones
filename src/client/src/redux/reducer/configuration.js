import { ADD_CONFIG, UPD_CONFIG, ADD_CONFIGS, SERVER_LOADING, ERROR_SERVER_LOADING } from "../constants/configuration";

import commonRed from './common'

const initialState = {
    configurations: {}
}
export default commonRed(undefined, {
    ADD_ENTITY: ADD_CONFIG, 
    UPD_ENTITY: UPD_CONFIG, 
    ADD_ENTITIES: ADD_CONFIGS,
    SERVER_LOADING,
    ERROR_SERVER_LOADING
}, 'configurations', initialState)

