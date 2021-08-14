import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    const serverUri = process.env.REACT_APP_API_URL || 'https://server-tictactoe.herokuapp.com'
    const [error, setError] = useState('')
    const [state, setState] = useState({
        username: '',
        password: '',
    })

    const handleSubmit = e => {
        e.preventDefault();

        fetch(serverUri + '/register', {
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
            <h2 className="auth-title">Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="auth-label">
                    <label for="username">
                        <p>username :</p>
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
                    Already have an account ? <Link to="login" className="link-redirect">sign in</Link>
                </p>
            </div>

        </div>
    )
}
