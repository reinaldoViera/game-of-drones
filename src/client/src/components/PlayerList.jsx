import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Add from '@material-ui/icons/Add';
import { withStyles, Fab, Tooltip } from '@material-ui/core';
import NewPlayer from './NewPlayer';

const styles = theme => ({
    chip: {
        margin: theme.spacing.unit,
    },
});

class PlayerList extends React.Component {
    state = {
        showCreate: false
    }
    openCreate = () => {
        this.setState({
            showCreate: true
        })
    }
    closeCreate = () => {
        this.setState({
            showCreate: false
        })
    }
    handleClose = (name) => {
        this.closeCreate();
        name && this.props.createPlayer(name);
    }
    checkName = (name) => {
        return this.props.players.findIndex(p => p.name === name) === -1;
    }
    handleClick = (id) => () => {
        this.props.selectPlayer(id);
    }
    render() {
        const { players = [], classes } = this.props;
        return (
            <div>
                <NewPlayer open={this.state.showCreate} checkName={this.checkName} handleClose={this.handleClose}/>
                {
                    players.map(player => (
                        <Chip
                            key={player.id}
                            avatar={<Avatar>{player.name[0].toUpperCase()}</Avatar>}
                            label={player.name}
                            clickable
                            className={classes.chip}
                            color="primary"
                            onClick={this.handleClick(player.id)}
                        />
                    ))
                }
                <Tooltip title="Add New Player">
                    <Fab size="small"  color="primary" aria-label="Add" className={classes.fab} onClick={this.openCreate}>
                        <Add />
                    </Fab>
                </Tooltip>
            </div>
        )
    }
}

export default withStyles(styles)(PlayerList);