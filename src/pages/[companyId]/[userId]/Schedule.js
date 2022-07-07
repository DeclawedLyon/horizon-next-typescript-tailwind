import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import ScheduleTimeSlot from '../../../components/ScheduleComponents/ScheduleTimeSlot';
import BottomNav from '../../../components/navigationComponents/BottomNav'
import DropDownMenu from '../../../components/userInterfaceComponents/dropdownMenu';
// import { capitalizeFirstLetter } from '../../../helperFunctions';
import { Key } from 'react';

const ScheduleWindow = () => {
  const d = new Date();
  const today = d.getDay();
  let dayOfWeek;
  const router = useRouter();
  const companyId = router.query.company;
  const userId = router.query.userId;
  console.log(companyId, userId)
  
  switch(today) {
    case 0:
      dayOfWeek = "Sunday"
      break;
    case 1:
      dayOfWeek = "Monday"
      break;
    case 2:
      dayOfWeek = "Tuesday"
      break;
    case 3:
      dayOfWeek = "Wednesday"
      break;
    case 4:
      dayOfWeek = "Thursday"
      break;
    case 5:
      dayOfWeek = "Friday"
      break;
    case 6:
      dayOfWeek = "Saturday"
      break;
  }
  const [userSchedule, setUserSchedule] = useState([])
  // const []
  
  //working
  const fetchUserSchedule = async () => {
    console.log(companyId, userId)
    const response = await fetch(`../../api/${companyId}/${userId}/schedule`)
    const userSchedule = await response.json()
    console.log(userSchedule)
    // setUserSchedule(userSchedule)
    return userSchedule
  }

  const formatUserSchedule = (scheduleArr) => {
    const scheduleElements = scheduleArr.map((scheduleObj, x) => {
      console.log(scheduleObj)
      return <ScheduleTimeSlot
        key={x}
        nickname={scheduleObj.nickname || scheduleObj.taskId}
        startTime={scheduleObj.startTime}
        endTime={scheduleObj.endTime}
        date={scheduleObj.date}
        description={scheduleObj.taskDescription ? scheduleObj.taskDescription : null}
      />
    })
    setUserSchedule(scheduleElements);
    // console.log('test', scheduleArr)
  }
  
  // memory leak in useEffect due to re-render after 
  // user schedule state change
  useEffect(() => {
    fetchUserSchedule().then(scheduleArr => formatUserSchedule(scheduleArr))
  }, [])

  return (
    <div className='w-full h-full min-h-screen max-h-screen flex flex-col justify-between bg-red-400'>
      <h1 className=' max-h-min bg-black text-white '>{}'s Schedule -{/*{d.toString().split('GMT')[0].trim()}*/}- <DropDownMenu /></h1>
      <div className='flex flex-col  min-h-full bg-black flex-1'>
        {userSchedule}
      </div>
      <div className='bg-slate-500'>
      <Link as={'/horizon/declan/Schedule'} href={'/[company]/[user]/Schedule'}>
        <button className='cursor-pointer m-2'>Show Declan's Schedule</button>
      </Link>
      <Link as={'/horizon/tara/Schedule'} href={'/[company]/[user]/Schedule'}>
        <button className='cursor-pointer m-2'>Show Tara's Schedule</button>
      </Link>
        
      </div>
      <BottomNav />
      {/* {hourlyElements} */}
      {/* <div>
        <button onClick={() => setSelectedDay("Monday")}>Show Monday schedule</button>
        <button onClick={() => setSelectedDay("Tuesday")}>Show Tuesday schedule</button>
        <button onClick={() => setSelectedDay("Wednesday")}>Show Wednesday schedule</button>
        <button onClick={() => setSelectedDay("Thursday")}>Show Thursday schedule</button>
        <button onClick={() => setSelectedDay("Friday")}>Show Friday schedule</button>
      </div> */}
    </div>
  )
}

export default ScheduleWindow




{/* <button onClick={() => fetchUserSchedule().then(filterSchedules(selectedDay))}>Show Today's Schedule</button> */}
// const [selectedDay, setSelectedDay] = useState(dayOfWeek === "Saturday" ? 'Friday' : dayOfWeek === "Sunday" ? "Friday" : dayOfWeek)
  // const [userSchedule, setUserSchedule] = useState([])
  // // test state variable with simple dayofweek
  // // update state variable to use datetime
  // const [hourlyElements, setHourlyElements] = useState()
  
  // //working
  // useEffect(() => {
  //   fetchUserSchedule().then(filterSchedules(selectedDay))
  // }, [selectedDay])

  // //working
  // const fetchUserSchedule = async () => {
  //   const response = await fetch(`../../api/horizon/schedules/${currentUser}`)
  //   const userSchedule = await response.json()
  //   console.log(userSchedule)
  //   setUserSchedule(userSchedule)
  // }

  // //obselete? just use sql to filter
  // const filterSchedules = async (selectedDay) => {
  //   const hourlyPlans = await userSchedule.reduce((hourlyElements, currentVal) => {
  //     currentVal.day == selectedDay ? hourlyElements.push(currentVal.dailySchedule) : ''
  //     return hourlyElements
  //   }, [])
  //   if (hourlyPlans.length > 0) {
  //     const hourlyElements = await hourlyPlans[0].map(plan => {
  //       return (
  //         <ScheduleTimeSlot 
  //           key={`TimeSlot:${plan.startTime}-${plan.endTime}`}
  //           startTime={plan.startTime} 
  //           endTime={plan.endTime} 
  //           plan={plan.plan} 
  //         />
  //       )
  //     })
  //     setHourlyElements(hourlyElements)
  //   }
  // }