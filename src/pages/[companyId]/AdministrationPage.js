import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import EditSchedule from '../../components/adminComponents/editSchedule';
import DropDownMenu from '../../components/userInterfaceComponents/dropdownMenu';

const admin = () => {
  const router = useRouter([]);
  const company = router.query.companyId
  const [employees, setEmployees] = useState()
  const [selectedEmployeeId, setSelectedEmployeeId] = useState()
  const [dropdownElement, setDropdownElement] = useState(<DropDownMenu menuItems={[]}/>)

  const getEmployeeScheduleById = async (userId) => {
    console.log('userid', userId)
    setSelectedEmployeeId('')
    const response = await fetch(`../api/${company}/${userId}/schedule`)
    const employeeSchedule = await response.json()
    console.log(employeeSchedule)
    setSelectedEmployeeId(employeeSchedule)
    return employeeSchedule
  }
  const getEmployeesByCompany = async (companyId) => {
    let response = await fetch(`../api/${companyId}/getemployees`)
    let employees = await response.json()
    setEmployees(employees)
    return employees
  }

  useEffect(() => {
    if (company) getEmployeesByCompany(company)
      .then(employeesArr => setDropdownElement(<DropDownMenu getSchedule={(id) => {getEmployeeScheduleById(id)}} menuList={employeesArr.map(item => {
        console.log(item)
        return item})}/>))
        console.log(selectedEmployeeId)
    // getEmployeesByCompany(company)
  }, [company, selectedEmployeeId])
  return (
    <div className='h-screen flex flex-col justify-between items-center '>
      <h1>Admin Page</h1>
      {dropdownElement}
      {/* <DropDownMenu menuItems={employees ? employees.map(e => e.name) : []}/> */}
      <div className='border border-red-500 w-full relative'>
        <ul className='flex flex-col px-60 relative border-4 border-green-500 max-w-fit'>{employees ? employees.map((e, x) => {
          return (
            <li className='border border-black text-center max-w-content py-5 px-10 m-2 float-left' key={x}>{e.userName}</li>
          )
        }) : ''}</ul>
      </div>
      <div>{selectedEmployeeId ? selectedEmployeeId.map(e => e.nickname) : ''}</div>
      <EditSchedule />
    </div>
  )
}

export default admin