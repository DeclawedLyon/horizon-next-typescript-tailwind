import React from 'react'
import Login from '../components/adminComponents/Login'
import BottomNav from '../components/navigationComponents/BottomNav'
import TopNav from '../components/navigationComponents/TopNav'

export interface LoginAppProps {
  loggedIn: boolean,
  handleLogin: (userName: string, password: string) => void,
  handleLogout: () => void
}

const LogInApp = ({loggedIn, handleLogin, handleLogout}: LoginAppProps) => {
  return (
    <div className="flex min-h-screen max-h-screen flex-col items-center justify-around">
      <TopNav loggedIn={loggedIn} handleLogin={handleLogin} handleLogout={handleLogout}/>
      <Login />
      <BottomNav show={loggedIn} home={true} admin={false}/>
    </div>
  )
}

export default LogInApp