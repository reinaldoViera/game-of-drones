// type Match {
//     id: ID!
//     players: [Player!]!
//     finished: Boolean!
//     winner: Player!
//     configuration: Configuration!
//     rounds: [Round!]!
// }
export default {
    players: (parent) => parent.getPlayers(),
    winner: (parent) => parent.getWinner(),
    configuration: (parent) => parent.getConfiguration(),
    rounds: (parent) => parent.getRounds(),
}