import React from 'react'

import { Outlet } from 'react-router-dom'
import { styled } from '@mui/system'
import { Box, Grid, Container } from '@mui/material'

import { LeftBar, UpBarSearch, UpBarUserName } from '../components'

const Main = styled(Box)(({ theme }) => ({
    height: 890,
    background: 'white',
    borderRadius: 10,
    marginTop: 20,
    paddingTop: 14,
    paddingLeft: 21
}))

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    background: '#F8F8FF',
    padding: 23,
    minHeight: 1000,
    width: '100%'
}))

const UpBarContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20
}))

const Layout = () => {
    return (
        <Wrapper>
            <Container maxWidth="xl" sx={{ display: 'flex' }}>
                {/* <Notification /> */}
                <LeftBar />
                <Box sx={{ ml: 2.3, width: '100%' }}>
                    <UpBarContainer>
                        <UpBarSearch />
                        <UpBarUserName />
                    </UpBarContainer>
                    <Box >
                        <Outlet />
                    </Box>
                </Box>
            </Container>
        </Wrapper>
    )
}

export default Layout