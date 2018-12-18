import React from 'react'
import { withStyles, Grid, Typography } from '@material-ui/core';
import Move from './Move';
import MoveList from './MoveList';

const styles = () => ({
    grid: {
        paddingTop: '50px'
    },
    name: {
        padding: '15px'
    },
    grid1: {
        backgroundColor: '#2196f3'
    },
    grid2: {
        backgroundColor: '#ff1744'
    }
})

function Round({ classes, move1, move2, moves, onSelectMove1, onSelectMove2, p1_name, p2_name }) {
    return (
        <Grid container spacing={8} className={classes.grid}>
            <Grid item xs={6} sm={6} lg={6} xl={6} md={6} className={classes.grid1}>
                <Typography variant="h5" component="h3" className={classes.name}>
                    {
                        `Select your move "${p1_name}"`
                    }
                </Typography>
                {
                    move1 ?
                        <Move hidden {...move1}>OK</Move> :
                        <MoveList moves={moves} onMoveSelection={onSelectMove1} />
                }
            </Grid>
            <Grid item xs={6} sm={6} lg={6} xl={6} md={6} className={classes.grid2}>
                <Typography variant="h5" component="h3"  className={classes.name}>
                    {
                        `Select your move "${p2_name}"`
                    }
                </Typography>
                {
                    move2 ?
                        <Move hidden {...move2}>OK</Move> :
                        <MoveList moves={moves} onMoveSelection={onSelectMove2} />
                }
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(Round)
