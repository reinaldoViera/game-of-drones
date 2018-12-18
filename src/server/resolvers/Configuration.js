// type Configuration {
//     id: ID!
//     name: String!
//     move_types: [MoveType!]!
// }

export default {
    move_types: (parent, args, context, info) => parent.getMoveTypes()
}