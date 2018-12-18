const initialState = {
    error: false,
    loading: false
}

export default (customReducer, actions, entity, customInitial = {}) => (state = {...initialState, ...customInitial}, { type, payload }) => {
    switch (type) {
        case actions.ADD_ENTITY:
        case actions.UPD_ENTITY:
        case actions.ADD_ENTITIES:
            return { ...state,
                [entity]: {
                    ...state[entity],
                    ...payload
                }
            }
        case actions.SERVER_LOADING:
            return {
                ...state,
                error: payload ? false : state.error,
                loading: payload
            }
        case actions.ERROR_SERVER_LOADING:
            return {
                ...state,
                error: payload
            }
        default:
            if(typeof customReducer === 'function')
                return customReducer(state, { type, payload })
            return state
    }
}
