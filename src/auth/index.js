import React, { useState, useEffect } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import Logout from './Logout'
import { useSelector } from 'react-redux'
import './auth.css'

export default function Auth() {
    const match = useRouteMatch()
    const history = useHistory()
    const [componentReady, seComponentReady] = useState(true)
    const isLogged = useSelector(state => state.auth.isLogged)

    useEffect(() => {
        if ((!isLogged && match.url === '/logout') ||
            (isLogged && (match.url === '/login' || match.url === '/signup')))
            history.push("/")
        else seComponentReady(true)
    }, [isLogged, match.url, history, seComponentReady])

    const redirectBack = e => {
        if (e.target.classList.contains('auth'))
            history.push("/")
    }

    if (!componentReady) return <></>

    return (
        <div className="auth" onClick={redirectBack}>
            {match.url === '/login' ? <Login /> : match.url === '/signup' ? <SignUp /> : <Logout />}
        </div>
    )
}
