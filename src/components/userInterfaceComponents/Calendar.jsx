import React, { useEffect, useState } from 'react'

const Calendar = () => {
  const [months, setMonths] = useState([])
 // calendar is being tested on Company page
  const monthList = {
    January: 31,
    February: 28,
    March: 31,
    April: 29,
    May: 28,
    June: 30,
    July: 31,
    August: 29,
    September: 30,
    November: 31,
    December: 31
  }
  useEffect(() => {
    const monthOptionElements = []
    for(let key in monthList) {
      monthOptionElements.push(<option>{key.slice(0, 3)}</option>)
    }
    setMonths(monthOptionElements);
  }, [])

  const handleMonthSelection = (e) => {
    const selection = e.target.value;
    if (selection === 'Select') return
    console.log(e.target.value)
  }
  // make sure to auto select the current month
  return (
    <div id='calendar-window'>
      <div id='date-selection'>
        <select onChange={handleMonthSelection}>
          <option>Select</option>
          {months}
        </select>
      </div>
    </div>
  )
}

export default Calendar