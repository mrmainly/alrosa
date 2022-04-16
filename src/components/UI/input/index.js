import React, { forwardRef, InputHTMLAttributes, DetailedHTMLProps } from 'react'
import { TextField } from '@mui/material'

export default forwardRef(function Input(props, ref) {
    return (
        <TextField
            margin="normal"
            fullWidth
            inputRef={ref}
            {...props}
        />
    )
})