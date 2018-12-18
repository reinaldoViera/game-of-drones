// type MoveType {
//     id: ID!
//     name: String!
//     kills: MoveType!
// }
export default {
    kills: (parent) => parent.getKills()
}