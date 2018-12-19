import gql from "graphql-tag";
import {client} from './common'

import {
    PLAYER_1_MOVE,
    PLAYER_2_MOVE,
    ADD_PREV_ROUND,
    SERVER_LOADING,
    ERROR_SERVER_LOADING,
    RESET_GAME
} from "../constants/rounds";

export const createNewRound = (dispatch) => (p1Move, player1, p2Move, player2, matchId, prev_rounds, cb) => () => {
  const mutation = gql`
    mutation newRound{  
        newRound(
            player1_move: ${p1Move},
            player1_key: ${player1.id},
            player2_move: ${p2Move},
            player2_key: ${player2.id},
            matchId: ${matchId}
        ) {
            moves {
                move_type {
                name
            }
            }
            winner {
                id
            }
            match {
                finished
            }
        }
    }
  `;
  dispatch(calculatingRound(true));
  client.mutate({ mutation }).then(({ data })=> {
    dispatch(calculatingRound(false));
    const { winner = {}, moves = []} = data.newRound;
    const p1Vitories = prev_rounds.filter(round => round.winner === player1.id).length;
    const p2Vitories = prev_rounds.filter(round => round.winner === player2.id).length;
    if(winner && winner.id === player1.id ) {
        let end = p1Vitories + 1 >= 2;
        dispatch(addPrevRound(winner.id, moves, end ? player1.name : null, player1.name));
    } else if(winner && winner.id === player2.id) {
        let end = p2Vitories + 1 >= 2;
        dispatch(addPrevRound(winner.id, moves, end ? player2.name : null, player2.name));
    } else {
        dispatch(addPrevRound(null, moves, null, null));
    }
    typeof cb === 'function' && cb(data.newRound);
  })
};
export const resetRound = (payload) => ({
  type: RESET_GAME,
  payload
})
export const player1Move = (move) => ({
    type: PLAYER_1_MOVE,
    payload: move
})

export const player2Move = (move) => ({
    type: PLAYER_2_MOVE,
    payload: move
})
export const calculatingRound = (load) => ({
    type: SERVER_LOADING,
    payload: load
})
export const errorCalculatingRound = (e) => ({
    type: ERROR_SERVER_LOADING,
    payload: e
})

export const addPrevRound = (winner, moves = [], matchWinner, name) => ({
    type: ADD_PREV_ROUND,
    payload: {
        winner,
        name,
        moves,
        matchWinner
    }
})