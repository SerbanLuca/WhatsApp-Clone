import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'

function Login() {

    const signIn = () => {
        
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
