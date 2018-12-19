import React, { Component } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@material-ui/core';

export default class NewPlayer extends Component {
    state = {
        name: '',
        valid: false
    }
    handleClose = () => {
        this.setState({
            name: ''
        });
        this.props.handleClose(this.state.name);
    }
    handleCancel = () => {
        this.setState({
            name: ''
        });
        this.props.handleClose();
    }
    handleChange = (ev) => {
        const name = ev.target.value;
        let valid = false;
        if(name && this.props.checkName(name)){
            valid = true;
        }
        this.setState({
            name,
            valid
        });
    }
    render() {
        const { open } = this.props;
        const { name, valid } = this.state;
        return (
            <Dialog
                open={open}
                onClose={this.handleCancel}
                id="new-player-dialog"
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add new Player</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        value={name}
                        onChange={this.handleChange}
                        margin="dense"
                        id="new-player-name"
                        label="Name"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleCancel} color="secondary">
                        Cancel
            </Button>
                    <Button id="new-player-btn" onClick={this.handleClose} color="primary" disabled={!valid}>
                        Add
            </Button>
                </DialogActions>
            </Dialog>
        )
    }
}
