
export const getPlayers = state => Object.entries(state.player.players || {}).map(a => a[1])
