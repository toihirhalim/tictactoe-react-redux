import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    const serverUri = process.env.REACT_APP_API_URL || 'https://server-tictactoe.herokuapp.com'
    const [error, setError] = useState('')
    const [state, setState] = useState({
        username: '',
        password: '',
    })

    const handleSubmit = e => {
        e.preventDefault();

        fetch(serverUri + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(state)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    return (
        <div className="auth-container">
            <h2 className="auth-title">Log In</h2>
            <form onSubmit={handleSubmit}>
                <div className="auth-label">
                    <label for="username">
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
                    <label for="password" className="auth-label">
                        <p>Password :</p>
                        <input
                            type="password"
                            className="auth-inputs"
                            value={state.password}
                            onChange={e => setState({ ...state, password: e.target.value })}
                            required
                        />
                    </label>
                </div>

                <div className="auth-button-container">
                    <button className="auth-button btn" type="submit">Login</button>
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

        </div>
    )
}
