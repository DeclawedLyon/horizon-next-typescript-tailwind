import Link from 'next/link'
import React from 'react'

export interface BottomNavProps {
  show: boolean,
  home: boolean,
  admin: boolean
}
const BottomNav = ({show, home, admin}: BottomNavProps) => {
  return (
    <div className='absolute bottom-0 w-full'>
      {show || <div className='w-full sticky bottom-0 h-11 bg-sky-500'></div>}
      {show && <div className="flex flex-row justify-center bottom-0 w-full ">
        {home || <Link as={'/'} href='/'>
              <button className='bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white rounded-lg cursor-pointer'>Home</button>
        </Link>}
        <Link as={'/horizon/declan/Map'} href={'/[company]/[user]/Map'}>
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white rounded-lg cursor-pointer">Map</button>
        </Link>
        <Link as={'/1/1/Schedule'} href={'/[company]/[user]/Schedule'}>
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white rounded-lg cursor-pointer">Schedule</button>
        </Link>
        <Link as={'/1/Company'} href={'/[company]/Company'}>
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white rounded-lg cursor-pointer">company</button>
        </Link>
        <Link as={'/1/1/Profile'} href={'/[company]/[user]/Profile'}>
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white rounded-lg cursor-pointer">Profile Page</button>
        </Link>
        {admin && <Link as={'/1/AdministrationPage'} href={'/[company]/AdministrationPage'}>
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white rounded-lg cursor-pointer">Admin Page</button>
        </Link>}
      </div>}
    </div>
  )
}

export default BottomNav