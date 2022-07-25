import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdminPageSelection = (props) => {
  return (
    <div onClick={() => props.showSchedule()} className=' border border-black h-full flex-grow flex flex-col items-center justify-center hover:bg-slate-400 hover:cursor-pointer w-1/2 rounded'>
      <div className='self-center flex-grow flex items-center justify-center'>
        <p className='mt-10 text-6xl'>{props.icon}</p>
      </div>
      <h2 className='self-center mb-8'>{props.selectionName}</h2>
    </div>
  )
}

export default AdminPageSelection