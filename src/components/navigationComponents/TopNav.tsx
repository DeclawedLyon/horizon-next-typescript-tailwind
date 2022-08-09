import Link from 'next/link'
import React from 'react'

export interface TopNavProps {
  loggedIn: boolean,
  handleLogout: () => void
}

const TopNav = ({loggedIn, handleLogout}: TopNavProps) => {
  return (
    <div className='fixed top-0 flex flex-row space-between justify-between w-full px-5 py-2 bg-sky-500'>
      <Link as={'/'} href={'/'}>
        <button>Horizon</button>
      </Link>
      <div>
        <button onClick={handleLogout}>{loggedIn ? 'Logout' : 'Login'}</button>
      </div>
    </div>
  )
}

export default TopNav