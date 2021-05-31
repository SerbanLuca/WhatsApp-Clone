import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../Reducer'

function Login() {

    const [{}, dispach] = useStateValue()

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispach({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }) 
        .catch((error) => alert(error.message))
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://cacheimg.gsp.ro/autocrop/smp-images-production/gsp.ro/13042021/1618303987823.jpg?width=848&height=0' alt=''/>
                <div className='login__text'>
                    <h1>Sign in to Lucagram</h1>
                </div>
                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
