import React from 'react'
import BottomNav from '../components/navigationComponents/BottomNav'
import TopNav from '../components/navigationComponents/TopNav'

const MainApp = () => {
  return (
    <div className="flex min-h-screen max-h-screen flex-col items-center justify-between">
      <TopNav loggedIn={true}/>
      <h1 className='text-sky-500 text-4xl'>Welcome</h1>
      <BottomNav />
    </div>
  )
}

export default MainApp