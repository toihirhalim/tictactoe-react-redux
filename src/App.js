import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import Auth from './auth'
import Game from './components/Game'
import Header from './components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { login, setPlayer } from './actions'
import { socket, SocketContext } from './context/socket'

function App() {
  const serverUri = process.env.REACT_APP_API_URL || 'https://server-tictactoe.herokuapp.com'
  const dispatch = useDispatch()
  const isLogged = useSelector(state => state.auth.isLogged)

  useEffect(() => {
    fetch(serverUri + '/isloggedin', { credentials: 'include' })
      .then(res => {
        if (res.ok)
          res.json()
            .then(data => {
              dispatch(login(data.token))
              dispatch(setPlayer(data.player))
            })
      })
  }, [serverUri, dispatch])

  useEffect(() => {
    isLogged ? socket.connect() : socket.disconnect()
  }, [isLogged])

  return (
    <div className="App">

      <SocketContext.Provider value={socket} >
        <Router>
          <Header />

          <Game />

          <Route path={["/login", "/signup", "/logout"]}>
            <Auth />
          </Route>

        </Router>
      </SocketContext.Provider>

    </div>
  );
}

export default App;
