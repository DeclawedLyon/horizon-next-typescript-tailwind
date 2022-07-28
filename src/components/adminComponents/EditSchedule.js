import React, { useEffect, useState } from 'react'
import useVisualMode from '../../hooks/useVisualMode'

const EditSchedule = (props) => {
  // const {mode, transition, back} = useVisualMode()
  const [employeeOptions, setEmployeeOptions] = useState(['testphrase'])
  console.log(props)
  useEffect(() => {
    console.log('triggered')
    if (props.employees !== undefined) {
      const employeeOptionElements = props.employees ?props.employees.map((e, x) => {
        return (
          <option key={`option-${x}`}>{e.userName}</option>
        )
      }) : ''
      setEmployeeOptions(employeeOptionElements)
    }
  }, [props.employees])

  const handleSelection = (e) => {
    console.log(e)
  }
  return (
    <div className='border border-black h-full w-full my-4'>
      <div id='title' className='w-full text-center'>
        <h1 className=' text-xl font-bold text-center'>Edit Schedules</h1>
      </div>
      <div className='w-full border border-black '>
        <h2>Select Employee</h2>
        <select onChange={handleSelection} placeholder='select employee'>
          <option>Select</option>
          {employeeOptions}
          {/* <option>Test1</option>
          <option>Test2</option>
          <option>Test3</option>
          <option>Test4</option> */}
        </select>
      </div>
      <div>Test words go here</div>
      <button onClick={() => props.back()}>back</button>
    </div>
  )
}

export default EditSchedule