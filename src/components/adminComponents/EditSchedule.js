import React from 'react'
import useVisualMode from '../../hooks/useVisualMode'

const EditSchedule = (props) => {
  // const {mode, transition, back} = useVisualMode()
  return (
    <div className='border border-black h-full w-full '>
      <div>
        test
      </div>
      <select placeholder='select employee'>
        <option>Test1</option>
        <option>Test2</option>
        <option>Test3</option>
        <option>Test4</option>
      </select>
      <div>Test words go here</div>
      <button onClick={() => props.back()}>back</button>
    </div>
  )
}

export default EditSchedule