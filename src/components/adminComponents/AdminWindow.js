import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faCalendarPlus, faMapLocationDot, faUsers } from '@fortawesome/free-solid-svg-icons'
import AdminPageSelection from './AdminPageSelection'

const AdminWindow = () => {
  return (
    <div className='h-full w-full gap-4 p-2 mx-2 flex flex-col relative right-2'>
      {/* row 1 */}
      <div className='h-auto w-full flex flex-1 gap-4  flex-grow ' >
        {/* box 1 */}
        <AdminPageSelection icon={<FontAwesomeIcon icon={faClipboardList}/>} selectionName={'Update Schedules'}/>
        {/* box 2 */}
        <AdminPageSelection icon={<FontAwesomeIcon icon={faCalendarPlus}/>} selectionName={'Add Task'}/>
      </div>

        {/* row 2 */}
      <div className='h-auto w-full flex flex-1 gap-4  flex-grow ' >
        {/* box 3 */}
        <AdminPageSelection icon={<FontAwesomeIcon icon={faMapLocationDot}/>} selectionName={'Add Map Location'}/>
        {/* box 4 */}
        <AdminPageSelection icon={<FontAwesomeIcon icon={faUsers}/>} selectionName={'Manage Employees'}/>   
      </div>
    </div>
  )
}

export default AdminWindow
