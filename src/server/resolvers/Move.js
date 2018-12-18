// type Move {
//     id: ID!
//     move_type: MoveType!
//     player: Player!
// }
export default {
    move_type: (parent, args, context, info) => parent.getMoveType(),
    player: (parent, args, context, info) => parent.getPlayer(),
}