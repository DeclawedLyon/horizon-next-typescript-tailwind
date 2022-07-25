/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import EditSchedule from '../../components/adminComponents/editSchedule';
import DropDownMenu from '../../components/userInterfaceComponents/dropdownMenu';
import BottomNav from '../../components/navigationComponents/BottomNav'
import AdminWindow from '../../components/adminComponents/AdminWindow';
import AppComponentWindow from '../../components/appComponents/AppComponentWindow';
import TopNav from '../../components/navigationComponents/TopNav';
import useVisualMode from '../../hooks/useVisualMode';
// import { getEmployeeScheduleById, getEmployeesByCompany } from '../../helperFunctions/apiHelpers';

const SHOW_SELECTION = 'SHOW_SELECTION'
const SCHEDULE_EDITOR = 'SCHEDULE_EDITOR'

const admin = () => {
  const { mode, transition, back } = useVisualMode(SHOW_SELECTION)

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
    <div className='h-screen flex flex-col relative'>
      <TopNav loggedIn={true}/>
      {/* <button onClick={() => fetchEmployeeData()}>GET</button> */}
      {mode === SHOW_SELECTION && (
        <AppComponentWindow component={<AdminWindow showSchedule={() => transition(SCHEDULE_EDITOR)} />} />
      )}
      {mode === SCHEDULE_EDITOR && (
        <EditSchedule />
      )

      }
      
      {/* <EditSchedule /> */}
      <BottomNav show={true} home={false} admin={false}/>
    </div>
  )
}

export default admin