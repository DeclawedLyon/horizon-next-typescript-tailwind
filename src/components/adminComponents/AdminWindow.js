import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />
const element2 = <FontAwesomeIcon icon={faCoffee} />

const AdminWindow = () => {
  return (
    <div className='h-full w-full border border-red-500 gap-4 p-2 mx-2 flex flex-col'>
      <div className='h-auto w-full flex flex-1 gap-4  flex-grow ' >
        <div className='w-auto border border-black h-full flex-grow flex justify-center'>
          {/* <p className=''>Box 1</p> */}
          <div className='self-center border border-black w-full'>
            <p className='self-center'><FontAwesomeIcon icon={faCoffee} /></p>

          </div>
          <h2 className='self-end'>Update Schedules</h2>
        </div>
        <div className='w-auto border border-black h-full flex-grow'>
        <p>Box 2</p>
          <h2 className=''>Update Schedules</h2>
        </div>
      </div>
      <div className='h-auto w-full flex flex-1 gap-4  flex-grow ' >
        <div className='w-auto border border-black h-full flex-grow'>
          <p>Box 3</p>
          <h2 className=''>Update Schedules</h2>
        </div>
        <div className='w-auto border border-black h-full flex-grow'>
          <p>Box 4</p>          
          <h2 className=''>Update Schedules</h2>
        </div>
      </div>
    </div>
  )
}

export default AdminWindow
