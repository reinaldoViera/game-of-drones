// type Player {
//     id: ID!
//     name: String!
//     matchs: [Match!]!
// }

export default {
    matchs: (parent) => parent.getMatchs()
}