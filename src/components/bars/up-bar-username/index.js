import React from 'react'

import { Box } from '@mui/material'
import { styled } from '@mui/system'

import { MyText } from '../..'
import { useAuth } from '../../../context/AuthContext'

const Root = styled(Box)(({ theme }) => ({
    background: 'white',
    borderRadius: 16,
    height: 88,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))

const UserBlog = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))

const UserImg = styled(Box)(({ theme }) => ({
    borderRadius: '50%',
    width: 50,
    height: 50,
    background: '#C4C4C4',
    marginLeft: 10
}))

const UpBarUserName = () => {
    const { user } = useAuth()
    return (
        <Root>
            <UserBlog>
                <MyText variant="h6">{user?.email}</MyText>
                <UserImg></UserImg>
            </UserBlog>
        </Root>
    )
}

export default UpBarUserName