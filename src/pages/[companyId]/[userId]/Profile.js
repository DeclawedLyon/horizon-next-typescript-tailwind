import Link from 'next/link'
import React from 'react'

const Profile = () => {
  return (
    <>
      <div>This is a test page for: Profile</div>
      <Link as={'/'} href='/'>
        <button>Home</button>
      </Link>
    </>
  )
}

export default Profile