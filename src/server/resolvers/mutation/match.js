export default {
    startMatch(parent, { player1, player2, config }, { db }) {
        return db.Match.create({
            finished: false,
            ConfigurationId: config
        }).then((newMatch) => {
            return newMatch.setPlayers([player1, player2]).then(() => newMatch)
        })
    },
    addWinner: async (parent, { matchId, winnerId}, { db }) => {
        const match = await db.Match.findByPk(matchId);
        await match.setWinner(winnerId);
        return match;
    }
}