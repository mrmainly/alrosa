import React from 'react'

import { Link } from 'react-router-dom'
import { styled } from '@mui/system'

const MyLink = ({ to, children, ...props }) => {
    const CusLink = styled(Link)(({ }) => ({
        color: 'white',
        textDecoration: 'none'
    }))
    return <CusLink to={to} {...props}>{children}</CusLink>
}

export default MyLink