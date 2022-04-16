import React from 'react'
import { styled } from '@mui/system'
import { Box, Grid, MenuItem } from '@mui/material'

import { EmployeesCard, MyText } from '../../components'

const Main = styled(Grid)(({ theme }) => ({
    display: 'flex',
}))

const CreateBox = styled(Box)(({ theme }) => ({
    height: 44,
    background: 'white',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    padding: 21,
    marginBottom: 20
}))

const Employees = () => {
    const array = [
        {
            username: 'Екатерина Подорожная',
            date: 'Декабрь 2019',
            departments: 'Отдел разработки',
            img: '/image/',
            participants: '16'
        },
        {
            username: 'Екатерина Подорожная',
            date: 'Декабрь 2019',
            departments: 'Отдел разработки',
            img: '/image/',
            participants: '16'
        },
        {
            username: 'Екатерина Подорожная',
            date: 'Декабрь 2019',
            departments: 'Отдел разработки',
            img: '/image/',
            participants: '16'
        },
        {
            username: 'Екатерина Подорожная',
            date: 'Декабрь 2019',
            departments: 'Отдел разработки',
            img: '/image/',
            participants: '16'
        },
        {
            username: 'Екатерина Подорожная',
            date: 'Декабрь 2019',
            departments: 'Отдел разработки',
            img: '/image/',
            participants: '16'
        },
        {
            username: 'Екатерина Подорожная',
            date: 'Декабрь 2019',
            departments: 'Отдел разработки',
            img: '/image/',
            participants: '16'
        },
    ]
    return (
        <Box>
            <CreateBox>
                <MenuItem>Сотрудники</MenuItem>
                <MenuItem sx={{ ml: 1 }}>Все</MenuItem>
                <MenuItem sx={{ ml: 1 }}>Избранное</MenuItem>
            </CreateBox>
            <Main container spacing={2}>
                {array.map((item, index) => (
                    <Grid item key={index} lg={4} xl={3} md={6} sm={12} xs={12}>
                        <EmployeesCard {...item} />
                    </Grid>
                ))}
            </Main>
        </Box>
    )
}

export default Employees