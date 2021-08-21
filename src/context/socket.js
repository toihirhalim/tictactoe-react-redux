import React from 'react'
import socketio from "socket.io-client";

const serverUri = process.env.REACT_APP_API_URL || 'https://server-tictactoe.herokuapp.com'

export const socket = socketio.connect(serverUri)

socket.disconnect()

export const SocketContext = React.createContext();
