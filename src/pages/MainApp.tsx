import React from 'react'
import BottomNav from '../components/navigationComponents/BottomNav'
import TopNav from '../components/navigationComponents/TopNav'

export interface MainAppProps {
  loggedIn: boolean,
  handleLogin: (userName: string, password: string) => void,
  handleLogout: () => void
}
const MainApp = ({loggedIn, handleLogin, handleLogout}: MainAppProps) => {
  return (
    <div className="flex min-h-screen max-h-screen flex-col items-center justify-between">
      <TopNav loggedIn={loggedIn} handleLogin={handleLogin} handleLogout={handleLogout}/>
      <h1 className='text-sky-500 text-4xl'>Welcome</h1>
      <BottomNav show={loggedIn} home={true} admin={false}/>
    </div>
  )
}

export default MainApp