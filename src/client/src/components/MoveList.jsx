import React from 'react'
import { Grid } from '@material-ui/core';
import Move from './Move';

export default function MoveList({ moves = [], onMoveSelection }) {
    const onClick = (move) => () => onMoveSelection(move);
    return (
        <Grid container spacing={8}>
            {
                moves.map((move, i) =>
                    <Grid key={i} item xs={12} sm={6} lg={4} xl={4} md={4}>
                        <Move {...move} onClick={onClick(move.id)}/>
                    </Grid>
                )
            }
        </Grid>
    )
}
