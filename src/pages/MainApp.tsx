import React from 'react'
import BottomNav from '../components/navigationComponents/BottomNav'
import TopNav from '../components/navigationComponents/TopNav'

export interface MainAppProps {
  loggedIn: boolean
}
const MainApp = ({loggedIn}: MainAppProps) => {
  return (
    <div className="flex min-h-screen max-h-screen flex-col items-center justify-between">
      <TopNav loggedIn={loggedIn}/>
      <h1 className='text-sky-500 text-4xl'>Welcome</h1>
      <BottomNav show={loggedIn}/>
    </div>
  )
}

export default MainApp