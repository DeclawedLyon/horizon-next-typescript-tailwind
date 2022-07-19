/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import EditSchedule from '../../components/adminComponents/editSchedule';
import DropDownMenu from '../../components/userInterfaceComponents/dropdownMenu';
import BottomNav from '../../components/navigationComponents/BottomNav'
import AdminWindow from '../../components/adminComponents/AdminWindow';
// import { getEmployeeScheduleById, getEmployeesByCompany } from '../../helperFunctions/apiHelpers';

const admin = () => {

  const router = useRouter([]);
  const company = router.query.companyId
  const [employees, setEmployees] = useState()
  const [selectedEmployeeId, setSelectedEmployeeId] = useState()
  const [dropdownElement, setDropdownElement] = useState(<DropDownMenu menuItems={[]}/>)

  const getEmployeeScheduleById = async (userId) => {
    setSelectedEmployeeId('')
    let response = await fetch(`../api/${company}/${userId}/schedule`)
    let employeeSchedule = await response.json()
    setSelectedEmployeeId(employeeSchedule)
    return employeeSchedule
  }
  const fetchEmployeeData = async () => {
    const employees = await getEmployeesByCompany(company)
    console.log(employees)
    setEmployees(employees)
  }
  const getEmployeesByCompany = async (companyId) => {
    let response = await fetch(`../api/${companyId}/getemployees`)
    let employees = await response.json()
    setEmployees(employees)
    return employees
  }

  useEffect(() => {
    if (company) getEmployeesByCompany(company)
      .then(employeesArr => setDropdownElement(
        <DropDownMenu getSchedule={(id) => {getEmployeeScheduleById(id)}} menuList={employeesArr.map(item => {
        return item
      })}/>))
  }, [company, selectedEmployeeId])
  return (
    <div className='h-screen flex flex-col justify-between items-center '>
      <h1>Admin Page</h1>
      <button onClick={() => fetchEmployeeData()}>GET</button>
      {/* <DropDownMenu menuItems={employees ? employees.map(e => e.name) : []}/> */}
      {dropdownElement}
      <AdminWindow />
      {/* <div className='border border-red-500 w-full relative'>
        <ul className='flex flex-col px-60 relative border-4 border-green-500 max-w-fit'>{employees ? employees.map((e, x) => {
          return (
            <li className='border border-black text-center max-w-content py-5 px-10 m-2 float-left' key={x}>{e.userName}</li>
            )
          }) : ''}</ul>

          <div>{selectedEmployeeId ? selectedEmployeeId.map(e => e.nickname) : ''}</div>
      </div> */}
      <EditSchedule />
      <BottomNav show={true} home={false} admin={false}/>
    </div>
  )
}

export default admin