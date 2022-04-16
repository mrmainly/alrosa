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

const Calendar = () => {
    return (
        <Box>
            <CreateBox>
                <MyText>Календарь</MyText>
            </CreateBox>
            фыв
        </Box>
    )
}

export default Calendar