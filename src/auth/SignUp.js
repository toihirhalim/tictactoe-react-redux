import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    const serverUri = process.env.REACT_APP_API_URL || 'https://server-tictactoe.herokuapp.com'
    const [error, setError] = useState('')
    const [state, setState] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        passwordMachted: true
    })

    const handleSubmit = e => {
        e.preventDefault();

        setError('')

        if (state.password !== state.confirmPassword) {
            setError("passwords doesn't macth")
            return
        }

        const body = {
            username: state.username,
            password: state.password
        }

        fetch(serverUri + '/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    return (
        <div className="auth-container">
            <h2 className="auth-title">Sign up</h2>
            <form onSubmit={handleSubmit}>
                <div className="auth-label">
                    <label for="username">
                        <p>Choose a username :</p>
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
                    <label for="password" className="auth-label">
                        <p>Choose a Password :</p>
                        <input
                            type="password"
                            className="auth-inputs"
                            value={state.password}
                            onChange={e => setState({
                                ...state,
                                password: e.target.value,
                                passwordMachted: state.confirmPassword === '' ||
                                    state.confirmPassword === e.target.value
                            })}
                            required
                        />
                    </label>

                    <label for="password" className="auth-label">
                        <p>Confirm password :</p>
                        <input
                            type="password"
                            className="auth-inputs"
                            value={state.confirmPassword}
                            onChange={e => setState({
                                ...state,
                                confirmPassword: e.target.value,
                                passwordMachted: state.password === e.target.value
                            })}
                            style={state.passwordMachted ?
                                { border: 'black solid 1px' } :
                                { border: 'red solid 1px' }
                            }
                            required
                        />
                    </label>
                </div>

                <div className="auth-button-container">
                    <button className="auth-button btn" type="submit">Create Account</button>
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
                    Already have an account ? <Link to="login" className="link-redirect">sign in</Link>
                </p>
            </div>

        </div>
    )
}
