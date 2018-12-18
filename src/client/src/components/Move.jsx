import React from 'react'
import { Paper, withStyles, Fab, Zoom } from '@material-ui/core';

const styles = () => ({
    paper: {
        padding: '3vw',
        textAlign: 'center'
    }
})

function Move({ name, hidden = false, children, onClick, classes }) {

    return (
        <Zoom timeout={500} in>
            <Paper elevation={5} onClick={onClick} className={classes.paper}>
                <Fab variant="extended" aria-label="Move" className={classes.fab}>
                    {
                        hidden ? children : name
                    }
                </Fab>
            </Paper>
        </Zoom>
    )
}

export default withStyles(styles)(Move)
