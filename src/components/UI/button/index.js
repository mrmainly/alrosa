import React from 'react'

import { Button } from '@mui/material'

const MyButton = ({ children, ...props }) => <Button {...props} variant="contained" type="submit">{children}</Button>

export default MyButton