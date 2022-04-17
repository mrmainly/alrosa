import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"

import { auth } from '../firebase'

const signup = (email, password, dispatch) => {
    return (
        createUserWithEmailAndPassword(auth, email, password).then(res => {
            console.log(res)
            dispatch({ type: 'notification', payload: { status: 'success', active: true, text: 'регистрация прошла успешно' } })
        }).catch(error => {
            dispatch({ type: 'notification', payload: { status: 'error', active: true, text: 'такой пользователь уже существует' } })
        })
    )
}

const signin = (email, password, dispatch) => {
    return (
        signInWithEmailAndPassword(auth, email, password).then(res => {
            dispatch({ type: 'notification', payload: { status: 'success', active: true, text: 'авторизация прошла успешно' } })
        }).catch(error => {
            dispatch({ type: 'notification', payload: { status: 'error', active: true, text: 'такого пользователя не существует' } })
        })
    )
}

const logout = (navigate) => {
    return (
        signOut(auth).then(() => {
            navigate('/sign-in')
        })
    )
}

export {
    signup,
    signin,
    logout
}