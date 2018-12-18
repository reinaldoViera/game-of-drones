export default `
type Query {
    players: [Player!]!
    playerSummary(id: ID!): PlayerSummary!
    matchs: [Match!]!
    configs: [Configuration!]!
    movetypes(configId: ID): [MoveType!]!
}

type PlayerSummary {
    matchs: Int!
    wins: Int!
}

type Mutation {
    addPlayer(name: String!): Player!
    startMatch(player1: ID!, player2: ID!, config: ID!): Match!
    newRound(player1_move: ID!, player1_key: ID!, player2_move: ID!, player2_key: ID!, matchId: ID!): Round!
    addWinner(matchId: ID!, winnerId: ID!): Match!
    addMoveTypeToConfig(name: String!, config: ID!, kills: ID): MoveType!
    updateMoveType(id: ID!, kills: ID!): MoveType!
}

type Player {
    id: ID!
    name: String!
    matchs: [Match!]!
}

type Match {
    id: ID!
    players: [Player!]
    finished: Boolean!
    winner: Player
    configuration: Configuration!
    rounds: [Round!]
}

type Configuration {
    id: ID!
    name: String!
    move_types: [MoveType!]!
}

type Round {
    id: ID!
    match: Match!
    winner: Player
    moves: [Move!]!
}

type MoveType {
    id: ID!
    name: String!
    kills: MoveType
}

type Move {
    id: ID!
    move_type: MoveType!
    player: Player!
}
`