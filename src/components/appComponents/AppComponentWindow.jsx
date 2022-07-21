import React from 'react'

const AppComponentWindow = (props) => {
  return (
    <div className='border border-black relative flex-grow mb-14 mx-4 mt-2 rounded-lg flex justify-center items-center'>
      <div className='w-full h-full'>
        {props.component}
      </div>
    </div>
  )
}

export default AppComponentWindow