import React from 'react'
import { Paper, Typography, withStyles, Button } from '@material-ui/core';

const styles = () => ({
    container: {
        padding: 10
    },
    button: {
        right: 0,
    },
    table: {
        padding: 10,
        width: '100%',
        textAlign: 'center'
    }
});

export function MatchSummary({ rounds = [], winner = false, classes, onNewGame }) {
    return (
        <Paper elevation={5} className={classes.container}>
            {
                winner && <Typography variant="h5" component="h3">
                    {`${winner} is the MASTER!!!`}
                </Typography>
            }

            <Typography variant="h5" component="h3">
                Score
            </Typography>
            <Typography component="div">
                <table id="summary-table" className={classes.table}>
                    <tbody>
                        <tr>
                            <th>Round</th>
                            <th>Winner</th>
                        </tr>

                        {
                            rounds.map(
                                (round, index) => (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{round.winner ? round.name : '---'}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>

            </Typography>
            {
                winner && 
                <Button id="new-game-btn" variant="contained" color="primary" className={classes.button} onClick={onNewGame}>
                    New Game
                </Button>
            }
            
        </Paper>
    )
}

export default withStyles(styles)(MatchSummary)
