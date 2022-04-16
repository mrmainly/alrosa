import React from 'react'

import { Box } from '@mui/material'
import { styled } from '@mui/system'

import { MyText } from '../..'

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

const UpBarUserName = () => {
    return (
        <Root>
            <UserBlog>
                <MyText variant="h6">Валерия Ефимова</MyText>
                <img src="/image/Ellipse4.png" style={{ marginLeft: 10 }} />
            </UserBlog>
        </Root>
    )
}

export default UpBarUserName