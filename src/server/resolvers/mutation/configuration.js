export default {
    addMoveTypeToConfig: async (parents, {name, kills, config}, {db}) => {
        const Config = await db.Configuration.findByPk(config);
        const moveType = await db.MoveType.create({
            name,
            killsId: kills
        });
        await Config.addMoveType(moveType);
        return moveType;
    },
    updateMoveType: async (parents, {id, kills}, {db}) => {
        const move = await db.MoveType.findByPk(id);
        await move.update({
            killsId: kills
        });
        return move;
    }
}