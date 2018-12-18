import gql from "graphql-tag";
import { getEntity, addEntity } from "./common";
import { SERVER_LOADING, ERROR_SERVER_LOADING, ADD_MOVES } from "../constants/move";

const movesQuery = gql`
  query {
    movetypes{
        id
        name
        kills {
            id
        }
    }
}
`;

export const addMoves = addEntity(ADD_MOVES);


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

export const createLoadMoves = getEntity(movesQuery, addMoves, 'movetypes', fetchStart, fetchEnd, fetchError);
