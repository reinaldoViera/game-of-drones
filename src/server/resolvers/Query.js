export default  {
    players: (parent, args, {db}) => db.Player.findAll(),
    matchs: (parent, args, {db}) => db.Match.findAll(),
    configs: (parent, args, {db}) => db.Configuration.findAll(),
    movetypes: async (parent, { configId }, {db}) => {        
        if(!configId) return db.MoveType.findAll()
        const configuration = await db.Configuration.findByPk(configId);
        return configuration.getMoveTypes();
    },
    playerSummary: async (p, {id}, {db}) => {
        const wins = await db.Match.count({
            where: {
                WinnerId: id
            }
        });
        const player = await db.Player.findByPk(id);
        const matchs = await player.getMatches();
        return {
            wins,
            matchs: matchs.length
        }
    }
}