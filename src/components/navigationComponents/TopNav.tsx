import Link from 'next/link'
import React from 'react'

export interface TopNavProps {
  loggedIn: boolean
}

const TopNav = ({loggedIn}: TopNavProps) => {
  return (
    <div className='flex flex-row space-between justify-between w-full px-5 py-2 bg-sky-500'>
      <Link as={'/'} href={'/'}>
        <button>Horizon</button>
      </Link>
      <div>
        <button>{loggedIn ? 'Logout' : 'Login'}</button>
      </div>
    </div>
  )
}

export default TopNav