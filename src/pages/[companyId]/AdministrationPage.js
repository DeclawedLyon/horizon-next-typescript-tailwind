import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import EditSchedule from '../../components/adminComponents/editSchedule';

const admin = () => {
  const router = useRouter([]);
  const company = router.query.companyId
  const [employees, setEmployees] = useState()

  const getEmployeesByCompany = async (companyId) => {
    let response = await fetch(`../api/${companyId}/getemployees`)
    let employees = await response.json()
    console.log(employees)
    setEmployees(employees)
  }
  useEffect(() => {
    if (company) getEmployeesByCompany(company)
    // getEmployeesByCompany(company)
  }, [company])
  return (
    <div className='h-screen flex flex-col justify-between items-center '>
      <h1>Admin Page</h1>
      <div className='border border-red-500 w-full relative'>
        <ul className='flex flex-col px-60 relative border-4 border-green-500 max-w-fit'>{employees ? employees.map((e, x) => {
          return (
            <li className='border border-black text-center max-w-content py-5 px-10 m-2 float-left' key={x}>{e.userName}</li>
          )
        }) : ''}</ul>
      </div>
      <EditSchedule />
    </div>
  )
}

export default admin