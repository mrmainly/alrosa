import React from 'react'

import { styled } from '@mui/system'
import { Box, Grid } from '@mui/material'

import { MyText, MyButton, TeamCard } from '../../components'

const Main = styled(Grid)(({ theme }) => ({
    display: 'flex',
}))

const CreateBox = styled(Box)(({ theme }) => ({
    height: 44,
    background: 'white',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 21,
    marginBottom: 20
}))

const Team = () => {
    const array = [
        {
            teamname: 'Square',
            supervisor: 'Валерия Ефимова',
            participants: '4',
            projects: ['ConnectIT', 'Safety', 'UTeam'],
            tags: ['Design', 'Development', 'Management']
        },
        {
            teamname: 'Square',
            supervisor: 'Валерия Ефимова',
            participants: '4',
            projects: ['ConnectIT', 'Safety', 'UTeam'],
            tags: ['Design', 'Development', 'Management']
        },
        {
            teamname: 'Square',
            supervisor: 'Валерия Ефимова',
            participants: '4',
            projects: ['ConnectIT', 'Safety', 'UTeam'],
            tags: ['Design', 'Development', 'Management']
        },
        {
            teamname: 'Square',
            supervisor: 'Валерия Ефимова',
            participants: '4',
            projects: ['ConnectIT', 'Safety', 'UTeam'],
            tags: ['Design', 'Development', 'Management']
        }
    ]
    return (
        <Box>
            <CreateBox>
                <MyText variant="h6">Мои команды</MyText>
                <MyButton>Создать</MyButton>
            </CreateBox>
            <Main container spacing={3}>
                {array.map((teamItem, index) => (
                    <Grid item key={index} lg={4} xl={4} md={6} sm={12} xs={12}>
                        <TeamCard {...teamItem} />
                    </Grid>
                ))}
            </Main>
        </Box>
    )
}

export default Team