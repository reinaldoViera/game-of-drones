export default {
    newRound: async (parent, {
        player1_move,
        player1_key,
        player2_move,
        player2_key,
        matchId
    }, {
        db
    }) => {
        const round = await db.Round.create({
            MatchId: matchId,
            moves: [{
                MoveTypeId: player1_move,
                PlayerId: player1_key
            }, {
                MoveTypeId: player2_move,
                PlayerId: player2_key
            }]
        }, {
            include: [{
                model: db.Move,
                as: 'moves'
            }]
        });
        const move_1 = await db.MoveType.findByPk(player1_move);
        
        // Check if move_1 kills move_2
        if (move_1.killsId == player2_move) {
            let roundCount = await db.Round.count({
                where: {
                    WinnerId: player1_key,
                    MatchId: matchId
                }
            }) || 0;
            if(roundCount + 1 >= 2) {
                // Check if it is the winner of the match
                let match = await db.Match.findByPk(matchId)
                match.setWinner(player1_key);
            }
            return round.setWinner(player1_key).then(() => round);
        }

        const move_2 = await db.MoveType.findByPk(player2_move);

        // Check if move_2 kills move_2
        if (move_2.killsId == player1_move) {
            let roundCount = await db.Round.count({
                where: {
                    WinnerId: player2_key,
                    MatchId: matchId
                }
            }) || 0;
            if(roundCount + 1 >= 2) {
                // Check if it is the winner of the match
                let match = await db.Match.findByPk(matchId)
                match.setWinner(player2_key);
            }
            return round.setWinner(player2_key).then(() => round);
        }

        return round;
    }

}