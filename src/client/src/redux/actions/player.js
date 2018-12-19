import gql from 'graphql-tag';

import {
    ADD_PLAYERS,
    SERVER_LOADING,
    ERROR_SERVER_LOADING
} from "../constants/player";
import {
    addEntity, getEntity, client
} from "./common";

const playersQuery = gql`
query players {
    players {
        id
        name
  }
}
`;


export const createFetchNewPlayer = (dispatch) => (name) => () => {
    const mutation = gql`
        mutation {
            addPlayer(name: "${name}") {
                id,
                name
            }
        }
    `;
    client.mutate({
        mutation
    }).then(({ data }) => {
        dispatch(addPlayers([ data.addPlayer ]))
    })
}

export const addPlayers = addEntity(ADD_PLAYERS);

export const fetchStart = () => ({
    type: SERVER_LOADING,
    payload: true
})
export const fetchEnd = () => ({
    type: SERVER_LOADING,
    payload: false
})
export const fetchError = (error = true) => ({
    type: ERROR_SERVER_LOADING,
    payload: error
})

export const createLoadPlayers = getEntity(playersQuery, addPlayers, 'players', fetchStart, fetchEnd, fetchError);
