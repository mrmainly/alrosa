import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"

import { auth } from '../firebase'

const signup = (email, password, dispatch) => {
    return (
        createUserWithEmailAndPassword(auth, email, password).then(res => {
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

const logout = () => {
    return (
        signOut(auth)
    )
}

export {
    signup,
    signin,
    logout
}