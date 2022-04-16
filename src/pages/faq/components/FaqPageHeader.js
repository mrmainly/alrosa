import React from 'react'

import { MyText } from '../../../components'

import { Box } from '@mui/material'
import { styled } from '@mui/system'

const TextBox = styled(Box)(({ theme }) => ({
    width: '70%',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    },
}))

const FaqPageHeader = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <MyText variant="h5" >рубрика</MyText>
            <MyText variant="h4" sx={{ mt: 2, mb: 2 }}>Вопрос ответ</MyText>
            <TextBox>
                <MyText variant="h6" sx={{ fontWeight: 'normal' }}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lore</MyText>
            </TextBox>
        </Box>
    )
}

export default FaqPageHeader