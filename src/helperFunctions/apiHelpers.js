
const getEmployee = () => {
  console.log('test')
}
const getEmployeeScheduleById = async (companyId, userId) => {
  let response = await fetch(`/api/${companyId}/${userId}/schedule`)
  let employeeSchedule = await response.json()
  return employeeSchedule
}
const getEmployeesByCompany = async (companyId) => {
  let response = await fetch(`/api/${companyId}/getemployees`)
  let employees = await response.json()
  return employees
}

export {
  getEmployee,
  getEmployeeScheduleById,
  getEmployeesByCompany
} 