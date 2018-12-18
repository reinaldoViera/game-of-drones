import { createSelector } from 'reselect'

export const getPlayer1 = createSelector([
    (state) => state.matchInProgress.player1,
    (state) => state.player.players,
], (player1, players) => {

    return player1 ? players[player1] : false;
})
export const getPlayer2 = createSelector([
    (state) => state.matchInProgress.player2,
    (state) => state.player.players,
], (player2, players) => {

    return player2 ? players[player2] : false;
})

export const getCurrentMoves = createSelector([
    (state) => state.matchInProgress.configurationId,
    (state) => state.configuration.configurations,
    (state) => state.move.moves,
], (configurationId, configs = {}, moves = {}) => {
    const currentConfig = configs[configurationId] || {};
    const currentMoves = currentConfig.move_types || [];
    return currentMoves.map(m => moves[m.id])
})