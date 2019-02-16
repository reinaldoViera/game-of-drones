import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@material-ui/core';

export default function NewPlayer({ open, checkName, handleClose }) {
    const [name, setName] = useState("");
    const [valid, setValid] = useState(false);

    function handleChange(ev) {
        const name = ev.target.value;
        setValid(name && checkName(name));
        setName(name)
    }

    function handleCancel() {
        setName("");
        handleClose();
    }

    function handleAdd() {
        setName("");
        handleClose(name);
    }

    return (
        <Dialog
            open={open}
            onClose={handleCancel}
            id="new-player-dialog"
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add new Player</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    value={name}
                    onChange={handleChange}
                    margin="dense"
                    id="new-player-name"
                    label="Name"
                    type="text"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel} color="secondary">
                    Cancel
        </Button>
                <Button id="new-player-btn" onClick={handleAdd} color="primary" disabled={!valid}>
                    Add
        </Button>
            </DialogActions>
        </Dialog>
    )
}


