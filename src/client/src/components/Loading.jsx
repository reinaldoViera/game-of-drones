import React from 'react'
import { CircularProgress } from '@material-ui/core';

export default function Loading({ loading, className, children }) {
    if (loading)
        return (
            <CircularProgress className={className} />
        );
    return (
        <div>
            {
                children
            }
        </div>
    )
}