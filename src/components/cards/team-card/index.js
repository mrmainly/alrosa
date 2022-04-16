import React from 'react'

import { Box, Grid, CardActionArea } from '@mui/material'
import { styled } from '@mui/system'

import { MyText } from '../..'

const Card = styled(Box)(({ theme }) => ({
    background: 'white',
    width: '100%',
    borderRadius: 8,
    borderBottom: '8px solid #FF8FED'
}))

const MyCardActionArea = styled(CardActionArea)(({ theme }) => ({
    background: 'white',
    width: '100%',
    borderRadius: 8,
    padding: '16px 21px 16px 21px',
}))

const Span = styled('span')(({ theme }) => ({
    marginLeft: 3,
    marginRight: 3
}))

const Tag = styled('span')(({ theme }) => ({
    marginLeft: 3,
    marginRight: 3,
    background: 'rgba(62, 160, 230, 0.25)',
    padding: 4,
    borderRadius: 4
}))

const TeamCard = ({ teamname, supervisor, participants, projects, tags }) => {

    return (
        <Card>
            <MyCardActionArea>
                <MyText variant="h6" >
                    {teamname}
                </MyText>
                <MyText variant="body1">
                    Руководитель:
                    <Span>{supervisor}</Span>
                </MyText>
                <MyText variant="body1">
                    Кол-во:
                    <Span>{participants}</Span>
                    участника
                </MyText>
                <MyText variant="body1">
                    Проекты:
                    {projects.map((item, index) => <Span key={index}>{item}</Span>)}
                </MyText>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                    {tags.map((item, index) => <Tag key={index}>
                        <MyText variant="body2">{item}</MyText>
                    </Tag>)}
                </Box>
            </MyCardActionArea>
        </Card>
    )
}

export default TeamCard