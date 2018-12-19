import gql from 'graphql-tag';

import {
  START_MATCH, SERVER_LOADING, ERROR_SERVER_LOADING, ADD_PLAYER_1, ADD_PLAYER_2, RESET_GAME
} from "../constants/matchInProgress";
import {client} from './common'

export const resetMatch = (payload) => ({
  type: RESET_GAME,
  payload
})

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

// Thunk
export const createStartMatch = (dispatch) => (p1Id, p2Id, configId, cb) => () => {
  const mutation = gql`
  mutation startMatch {
      startMatch(player1: ${p1Id}, player2: ${p2Id}, config: ${configId}) {
        id
      }
  }
  `;
  dispatch(fetchStart());
  client.mutate({ mutation }).then(({ data })=> {
    const match = data.startMatch;
    dispatch(setStartMatch(match.id, p1Id, p2Id, configId, false))
    typeof cb === 'function' && cb(match);
    dispatch(fetchEnd());
  }).catch( e => dispatch(fetchError(e)))
};


export const setStartMatch = (matchId, player1, player2, configurationId, loading = true) => ({
  type: START_MATCH,
  payload: {
    matchId,
    winner: undefined,
    configurationId,
    loading,
    player1,
    player2,
  }
})

export const setPlayer1 = (id) => ({
  type: ADD_PLAYER_1,
  payload: id
})

export const setPlayer2 = (id) => ({
  type: ADD_PLAYER_2,
  payload: id
})
