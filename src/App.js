import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import Auth from './auth'
import Game from './components/Game'
import Header from './components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './actions'
//import { socket, SocketContext } from './context/socket'
import socketio from "socket.io-client";

const SocketContext = React.createContext();

function App() {
  const serverUri = process.env.REACT_APP_API_URL || 'https://server-tictactoe.herokuapp.com'
  const dispatch = useDispatch()
  const isLogged = useSelector(state => state.auth.isLogged)
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    fetch(serverUri + '/isloggedin', { credentials: 'include' })
      .then(res => {
        if (res.ok)
          res.json()
            .then(data => {
              dispatch(login(data.token))
            })
      })
  }, [serverUri, dispatch])

  useEffect(() => {
    if (isLogged) setSocket(socketio.connect(serverUri))
    else setSocket(socket => {
      if (socket) socket.disconnect()
      return socket
    })
  }, [isLogged, serverUri])

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
