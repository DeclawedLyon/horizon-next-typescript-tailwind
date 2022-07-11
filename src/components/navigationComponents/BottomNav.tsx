import Link from 'next/link'
import React from 'react'

export interface BottomNavProps {
  show: boolean
}
const BottomNav = ({show}: BottomNavProps) => {
  return (
    <>
      {show || <div className='w-full h-11 bg-sky-500'></div>}
      {show && <div className="flex flex-row justify-center bottom-0 w-full ">
        <Link as={'/'} href='/'>
              <button className='bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white rounded-lg cursor-pointer'>Home</button>
        </Link>
        <Link as={'/horizon/declan/Map'} href={'/[company]/[user]/Map'}>
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white rounded-lg cursor-pointer">Map</button>
        </Link>
        <Link as={'/1/1/Schedule'} href={'/[company]/[user]/Schedule'}>
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white rounded-lg cursor-pointer">Schedule</button>
        </Link>
        <Link as={'/horizon/Company'} href={'/[company]/Company'}>
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white rounded-lg cursor-pointer">company</button>
        </Link>
        <Link as={'/horizon/declan/Profile'} href={'/[company]/[user]/Profile'}>
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white rounded-lg cursor-pointer">Profile Page</button>
        </Link>
        <Link as={'/horizon/Scheduler'} href={'/[company]/Scheduler'}>
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white rounded-lg cursor-pointer">Admin Page</button>
        </Link>
      </div>}
    </>
  )
}

export default BottomNav