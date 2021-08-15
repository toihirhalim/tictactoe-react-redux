import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../actions'

export default function Logout() {
    const dispatch = useDispatch()
    const serverUri = process.env.REACT_APP_API_URL || 'https://server-tictactoe.herokuapp.com'

    useEffect(() => {
        fetch(serverUri + '/logout', { credentials: 'include' })
            .then(res => {
                if (res.ok) dispatch(logout())
            })
    }, [dispatch, serverUri])

    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    )
}
