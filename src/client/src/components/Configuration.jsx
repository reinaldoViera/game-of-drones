import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Fab } from '@material-ui/core';
import Config from '@material-ui/icons/BlockOutlined';
import MoveConfigList from './MoveConfigList';

const initial = {
    show: false,
    newMoveName: '',
    newMoveKills: '',
    valid: false,
    movesToRemove: [],
    movesToAdd: []
}

export default class Configuration extends Component {
    static propTypes = {
        moves: PropTypes.array,
    }
    state = initial

    switchWindow = () => {
        this.setState({
            show: !this.state.show
        })
    }
    handleChangeName = (ev) => {
        const newMoveName = ev.target.value;
        this.setState({
            newMoveName
        })
    }
    handleChangeKills = (ev) => {
        const newMoveKills = ev.target.value;
        this.setState({
            newMoveKills
        })
    }
    handleCancel = () => {
        this.setState(initial)
    }
    movesToShow = () => this.props.moves.concat(this.state.movesToAdd)
    render() {
        const { show, valid, newMoveName, newMoveKills } = this.state;
        return (
            <div>
                <Fab color="primary" aria-label="Configuration" onClick={this.switchWindow}>
                    <Config />
                </Fab>
                <Dialog
                    open={show}
                    onClose={this.handleCancel}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Manage Configuration</DialogTitle>
                    <DialogContent>
                        <MoveConfigList moves={this.movesToShow()} />
                    </DialogContent>
                    <TextField
                        fullWidth
                        autoFocus
                        value={newMoveName}
                        onChange={this.handleChangeName}
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                    />
                    <TextField
                        fullWidth
                        value={newMoveKills}
                        onChange={this.handleChangeKills}
                        margin="dense"
                        id="kill"
                        label="Kills"
                        type="text"
                    />
                    <DialogActions>
                        <Button onClick={this.handleCancel} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary" disabled={!valid}>
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
