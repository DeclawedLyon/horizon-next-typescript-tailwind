import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faClipboardList, faCalendarPlus, faMapLocationDot, faUsers } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />
const element2 = <FontAwesomeIcon icon={faCoffee} />

const AdminWindow = () => {
  return (
    <div className='h-full w-full border border-red-500 gap-4 p-2 mx-2 flex flex-col'>
      {/* row 1 */}
      <div className='h-auto w-full flex flex-1 gap-4  flex-grow ' >
        {/* box 1 */}
        <div className='w-auto border border-black h-full flex-grow flex flex-col items-center justify-center'>
          <div className='self-center flex-grow flex items-center justify-center'>
            <p className='mt-10 text-6xl'><FontAwesomeIcon icon={faClipboardList} /></p>
          </div>
          <h2 className='self-center mb-8'>Update Schedules</h2>
        </div>
        {/* box 2 */}
        <div className='w-auto border border-black h-full flex-grow'>
            <FontAwesomeIcon icon={faCalendarPlus} />
            <h2 className=''>Add Task</h2>
          </div>
        </div>
        {/* row 2 */}
        <div className='h-auto w-full flex flex-1 gap-4  flex-grow ' >
          {/* box 3 */}
          <div className='w-auto border border-black h-full flex-grow'>
            <FontAwesomeIcon icon={faMapLocationDot} />
            <h2 className=''>Add Map Location</h2>
          </div>
          <div className='w-auto border border-black h-full flex-grow'>
            <FontAwesomeIcon icon={faUsers}/>
            <h2 className=''>Manage Employees</h2>
          </div>
        
      </div>
    </div>
  )
}

export default AdminWindow
