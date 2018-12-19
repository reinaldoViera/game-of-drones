import React from 'react'
import { Grid, withStyles, Zoom } from '@material-ui/core';
import PlayerSummary from './PlayerSummary';

const styles = () =>({
    grid: {
        paddingTop: '50px'
    },
    grid1: {
        backgroundColor: '#2196f3'
    },
    grid2: {
        backgroundColor: '#ff1744'
    }
})

function SelectedPlayers({ player1, player2, classes }) {

    return (
        <Grid id="selected-players" container spacing={8} className={classes.grid}>
            {
                player1 && 
                <Zoom in>
                    <Grid item xs={6} sm={6} lg={6} xl={6} md={6} className={classes.grid1}>
                        <PlayerSummary  {...player1}/>
                    </Grid>
                </Zoom>
            }
            {
                player2 && 
                <Zoom in>
                    <Grid item xs={6} sm={6} lg={6} xl={6} md={6} className={classes.grid2}>
                        <PlayerSummary {...player2} />
                    </Grid>
                </Zoom>

            }
        </Grid>
    )
}

export default withStyles(styles)(SelectedPlayers)
