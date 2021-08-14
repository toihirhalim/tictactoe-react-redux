import React, { useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import './auth.css'

export default function Auth() {
    const match = useRouteMatch()
    const history = useHistory()

    if (match.url !== '/login' && match.url !== '/signup')
        history.push("/")

    const serverUri = 'http://localhost:3001/'
    const [token, setToken] = useState('')

    const login = e => {
        fetch(serverUri + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                username: 'Kyle',
                password: 'password'
            })
        })
            .then(res => res.json())
            .then(data => setToken(data.token))
    }

    const logout = e => {
        fetch(serverUri + 'logout', { credentials: 'include' })
            .then(res => {
                if (res.ok) setToken('')
                else console.log(res)
            })
    }
    const getNewToken = e => {
        fetch(serverUri + 'token', {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => setToken(data.newToken))
    }

    const authorizationTest = e => {
        fetch(serverUri + 'authorization-test', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    const getPlayer = e => {
        fetch(serverUri + 'player/Kyle')
            .then(res => res.json())
            .then(data => console.log(data))
    }
    const getPlayerFullInfos = e => {
        fetch(serverUri + 'player', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    const redirectBack = e => {
        if (e.target.classList.contains('auth'))
            history.push("/")
    }

    return (
        <div className="auth" onClick={redirectBack}>
            {match.url === '/login' ? <Login /> : <SignUp />}
        </div>
    )
}
