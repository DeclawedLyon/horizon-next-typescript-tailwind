import React from 'react'
import Login from '../components/adminComponents/Login'
import BottomNav from '../components/navigationComponents/BottomNav'
import TopNav from '../components/navigationComponents/TopNav'

export interface LoginAppProps {
  loggedIn: boolean
}

const LogInApp = ({loggedIn}: LoginAppProps) => {
  return (
    <div className="flex min-h-screen max-h-screen flex-col items-center justify-between">
      <TopNav loggedIn={loggedIn} />
      <Login />
      <BottomNav show={loggedIn}/>
    </div>
  )
}

export default LogInApp