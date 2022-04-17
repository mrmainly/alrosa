import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { ChatEngine } from 'react-chat-engine'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { auth } from '../../firebase'
import { useAuth } from '../../context/AuthContext'

const Chat = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const [loading, setLoading] = useState(true)
    console.log(user)

    const getFile = async (url) => {
        const response = await fetch(url)
        const data = await response.blob()

        return new File([data], "userPhoto.jpg", { type: 'image/jpeg' })
    }

    useEffect(() => {
        if (!user) {
            navigate('/sign-in');

            return;
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": 'ece88905-e325-4001-b6c0-84a8f1dce6a5',
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
            .then(() => {
                setLoading(false)
            }).catch(() => {
                let formdata = new FormData()
                formdata.append('email', user.email)
                formdata.append('username', user.email)
                formdata.append('secret', user.uid)

                getFile(user.photoUrl)
                    .then((avatar) => {
                        formdata.append('avatar', avatar, avatar.name)

                        axios.post('https://api.chatengine.io/users/',
                            formdata,
                            { headers: { "private-key": 'dab64d78-8a61-416b-8e1d-8be68a751211' } }
                        )
                            .then(() => setLoading(false))
                            .catch((error) => console.log(error))
                    })
            })
    }, [user, navigate])
    return (
        <Box>
            <ChatEngine
                height='calc(100vh - 66px)'
                projectID={'ece88905-e325-4001-b6c0-84a8f1dce6a5'}
                userName={user.email}
                userSecret={user.uid}
            />
        </Box>
    )
}

export default Chat