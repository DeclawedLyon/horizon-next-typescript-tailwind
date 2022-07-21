import Link from 'next/link'
import React from 'react'
import AppComponentWindow from '../../components/appComponents/AppComponentWindow'
import BottomNav from '../../components/navigationComponents/BottomNav'
import TopNav from '../../components/navigationComponents/TopNav'
import MapWindow from '../../components/mapComponents/MapWindow'
import admin from './AdministrationPage'
import AdminWindow from '../../components/adminComponents/AdminWindow'
const Company = () => {
  const adminComponent = <AdminWindow />
  const map = <MapWindow />
  return (
    // <div className='h-full min-h-screen border border-black relative flex flex-col justify-between'>
    <div className='relative border border-green-500 h-screen flex flex-col'>
      <TopNav loggedIn={true}/>
      <AppComponentWindow component={adminComponent} />
      
      {/* <Link as={'/'} href='/'>
        <button>Home</button>
      </Link> */}
      <BottomNav home={false} show={true} admin={true} />
    </div>
  )
}

export default Company