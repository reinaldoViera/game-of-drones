// type Round {
//     id: ID!
//     match: Match!
//     winner: Player
//     moves: [Move!]!
// }

export default {
    match: ({ MatchId }, arg, { db }) => db.Match.findByPk( MatchId ),
    winner: (parent) => parent.getWinner(),
    moves: (parent) => parent.getMoves(),
}