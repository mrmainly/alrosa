import React from 'react'

import { Box, MenuItem, Switch, FormControlLabel } from '@mui/material'
import { styled } from '@mui/system'
import { useNavigate } from 'react-router-dom'

import { MyLink } from '../..'
import MyText from '../../text'
import { logout } from '../../../api'

const Root = styled(Box)(({ theme }) => ({
    width: 350,
    background: 'white',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20
}))

const Logo = styled(Box)(({ theme }) => ({
    marginTop: 23,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20
}))

const CompositeBox = styled(Box)(({ theme }) => ({
    width: '100%'
}))

const CusMenuItem = styled(MenuItem)(({ theme }) => ({
    width: '100%',
    height: 80,
    marginTop: 10,
    paddingLeft: 20
}))


const LeftBar = () => {
    const navigate = useNavigate()
    const links = [
        {
            label: 'Чаты',
            link: '/',
            img: '/image/Chat.png'
        },
        {
            label: 'Мои команды',
            link: '/team',
            img: '/image/3User.png'
        },
        {
            label: 'Сотрудники',
            link: '/employees',
            img: '/image/Work.png'
        },
        {
            label: 'Календарь',
            link: '/calendar',
            img: '/image/Calendar.png'
        },
        {
            label: 'Мои задачи',
            link: '/my-tasks',
            img: '/image/Category.png'
        },
        {
            label: 'Настройки',
            link: '/settings',
            img: '/image/Setting.png'
        },
    ]
    return (
        <Root >
            <CompositeBox>
                <Logo>
                    <img src="/image/Logo.png" />
                </Logo>
                {links.map((item, index) => (
                    <MyLink to={item.link} sx={{ color: 'black', width: '100%' }} key={index}>
                        <CusMenuItem>
                            <img src={item.img} />
                            <MyText sx={{ ml: 2 }}>
                                {item.label}
                            </MyText>
                        </CusMenuItem>
                    </MyLink>
                ))}
            </CompositeBox>
            <CompositeBox>
                <FormControlLabel control={<Switch defaultChecked />} label="Формальная тема" sx={{ ml: 1.9 }} />
                <CusMenuItem onClick={() => logout(navigate)}>
                    <img src="/image/Logout.png" />
                    <MyText sx={{ ml: 2 }}>
                        Выйти
                    </MyText>
                </CusMenuItem>
            </CompositeBox>
        </Root>
    )
}

export default LeftBar