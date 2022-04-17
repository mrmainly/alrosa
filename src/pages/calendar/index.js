import React, { useEffect, useState } from 'react'
import { styled } from '@mui/system'
import { Box, Grid, MenuItem } from '@mui/material'

import { EmployeesCard, MyText } from '../../components'
import axios from 'axios'

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
    // короче мне похуй я заебался сейчас 5 утра а я не спал на протяжении 3 дней а мне еще идти и делать свои проекты так что сори за мусорный код 
    return (
        <Box>
            <CreateBox>
                <MyText>Календарь</MyText>
            </CreateBox>
            Calendar
        </Box>
    )
}

export default Calendar