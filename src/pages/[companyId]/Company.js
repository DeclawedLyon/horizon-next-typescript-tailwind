import Link from 'next/link'
import React from 'react'
import BottomNav from '../../components/navigationComponents/BottomNav'
import TopNav from '../../components/navigationComponents/TopNav'
const Company = () => {
  return (
    <div className='h-full min-h-screen border border-black relative flex flex-col justify-between'>
      <TopNav loggedIn={true}/>
      <Link as={'/'} href='/'>
        <button>Home</button>
      </Link>
      <BottomNav home={false} show={true} admin={true} />
    </div>
  )
}

export default Company