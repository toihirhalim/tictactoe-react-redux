import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login, setPlayer } from '../actions'
import { FiEyeOff, FiEye } from 'react-icons/fi';

export default function Login() {
    const dispatch = useDispatch()
    const serverUri = process.env.REACT_APP_API_URL || 'https://server-tictactoe.herokuapp.com'
    const [error, setError] = useState('')
    const [state, setState] = useState({
        username: '',
        password: '',
        hidePassword: true,
        fetch: true
    })

    const handleSubmit = e => {
        e.preventDefault();

        if (!state.fetch) return
        setState({ ...state, fetch: false })

        setError('')

        const body = {
            username: state.username,
            password: state.password
        }

        fetch(serverUri + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(body)
        })
            .then(res => {
                if (res.ok)
                    res.json()
                        .then(data => {
                            dispatch(login(data.token))
                            dispatch(setPlayer(data.player))
                            setError('')
                        })
                else {
                    res.json()
                        .then(data => setError(data.msg))
                        .catch(e => setError('something went wrong: please try again'))
                    setState({ ...state, fetch: true })
                }
            })
    }

    return (
        <div className="auth-element">
            <h1 className="auth-title login-title">Log In</h1>
            <form onSubmit={handleSubmit}>
                <div className="auth-label">
                    <label htmlFor="username">
                        <p>username or email :</p>
                        <input
                            type="text"
                            className="auth-inputs"
                            value={state.username}
                            onChange={e => setState({ ...state, username: e.target.value })}
                            required
                        />
                    </label>
                </div>
                <div className="auth-label">
                    <label htmlFor="password" className="auth-label">
                        <div className="password-title">
                            <p>Password :</p>
                            {
                                state.password !== '' &&
                                <div className="password-icons">
                                    {
                                        state.hidePassword ?
                                            <FiEye className="icon" onClick={e => setState({ ...state, hidePassword: !state.hidePassword })} /> :
                                            <FiEyeOff className="icon" onClick={e => setState({ ...state, hidePassword: !state.hidePassword })} />
                                    }
                                </div>
                            }
                        </div>
                        <input
                            type={state.hidePassword ? "password" : "text"}
                            className="auth-inputs"
                            value={state.password}
                            onChange={e => setState({ ...state, password: e.target.value })}
                            required
                        />
                    </label>
                </div>

                <div className="auth-button-container">
                    <button className="auth-button login-submit-btn" type="submit">Login</button>
                </div>

            </form>

            {
                error &&
                <div className="auth-error-container">
                    <p className="auth-error">{error}</p>
                </div>
            }

            <div className="auth-link-to-component">
                <p>
                    New to Tictactoe ? <Link to="signup" className="link-redirect">create an acount</Link>
                </p>
            </div>

        </div >
    )
}
