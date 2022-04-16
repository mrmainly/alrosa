import React from 'react'

import { Box, Grid, CardActionArea } from '@mui/material'
import { styled } from '@mui/system'

import { MyText } from '../..'

const Card = styled(Box)(({ theme }) => ({
    background: 'white',
    width: '100%',
    borderRadius: 8,
}))

const MyCardActionArea = styled(CardActionArea)(({ theme }) => ({
    background: 'white',
    width: '100%',
    borderRadius: 8,
    padding: '12px 16px 0px 16px',
    height: 141,

}))

const Img = styled(Box)(({ theme }) => ({
    background: '#C4C4C4',
    borderRadius: '50%',
    objectFit: 'cover',
    height: 76,
    width: 76
}))

const EmployeesCard = ({ username, img, date, departments, participants }) => {

    return (
        <Card>
            <MyCardActionArea>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Img />
                    <Box>
                        <MyText variant="body1" sx={{ fontWeight: 600 }}>
                            {departments}
                        </MyText>
                        <MyText variant="body2" sx={{ fontWeight: 600 }}>
                            {username}
                        </MyText>
                        <MyText variant="body2" sx={{ color: '#3EA0E6' }}>
                            {participants} сотрудников
                        </MyText>
                    </Box>
                </Box>
                <MyText sx={{ color: '#C4C4C4', float: 'right' }} variant="body2">
                    {date}
                </MyText>
            </MyCardActionArea>
        </Card>
    )
}

export default EmployeesCard