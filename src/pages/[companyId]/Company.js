import Link from 'next/link'
import React from 'react'

const Company = () => {
  return (
    <>
      <div>This is a test page for: Company</div>
      <Link as={'/'} href='/'>
        <button>Home</button>
      </Link>
    </>
  )
}

export default Company