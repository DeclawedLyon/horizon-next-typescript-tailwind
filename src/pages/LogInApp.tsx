import React from 'react'
import BottomNav from '../components/navigationComponents/BottomNav'
import TopNav from '../components/navigationComponents/TopNav'

const LogInApp = () => {
  return (
    <div className="flex min-h-screen max-h-screen flex-col items-center justify-between">
      {/* <TopNav loggedIn={false} /> */}
      <BottomNav />
    </div>
  )
}

export default LogInApp