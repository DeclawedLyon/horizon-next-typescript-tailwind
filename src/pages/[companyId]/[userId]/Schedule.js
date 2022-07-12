import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import ScheduleTimeSlot from '../../../components/scheduleComponents/ScheduleTimeSlot';
import BottomNav from '../../../components/navigationComponents/BottomNav'
import DropDownMenu from '../../../components/userInterfaceComponents/dropdownMenu';
// import { capitalizeFirstLetter } from '../../../helperFunctions';
// import flowBite from '../../../../node_modules/flowbite/dist/flowbite'
import { Key } from 'react';
import Script from 'next/script';

const ScheduleWindow = () => {
  const d = new Date();
  const today = d.getDay();
  let dayOfWeek;
  const router = useRouter();
  const companyId = router.query.company;
  const userId = router.query.userId;
  
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

  const fetchUserSchedule = async (id1, id2) => {
    if (id1 && id2) {
      const response = await fetch(`../../api/${id1}/${id2}/schedule`)
      const userSchedule = await response.json()
      return userSchedule
    } else {
      const response = await fetch(`../../api/${companyId}/${userId}/schedule`)
      const userSchedule = await response.json()
      return userSchedule
    }
  }

  const formatTime = (time, formatType) => {
    if (formatType === '12hr') {
      if (time < 1000) {
        let splitTime = time.toString().split('')
        splitTime.splice(1, 0, ':')
        return splitTime.join('')
      }
      else {
        let splitTime = time.toString().split('')
        splitTime.splice(2, 0, ':')
        return splitTime.join('')
      }
    }
    if (formatType === '24hr') {

    }
  }

  const formatUserSchedule = (scheduleArr) => {
    const scheduleElements = scheduleArr.map((scheduleObj, x) => {
      return <ScheduleTimeSlot
        key={x}
        nickname={scheduleObj.nickname || scheduleObj.taskId}
        startTime={formatTime(scheduleObj.startTime, '12hr')}
        endTime={formatTime(scheduleObj.endTime, '12hr')}
        date={scheduleObj.date}
        description={x > 5 || scheduleObj.taskDescription ? scheduleObj.taskDescription : 'words go here'}
      />
    })
    setUserSchedule(scheduleElements);
  }

  useEffect(() => {
    fetchUserSchedule().then(scheduleArr => formatUserSchedule(scheduleArr))
  }, [companyId, userId])

  return (
    <div className='w-full h-full min-h-screen max-h-screen flex flex-col justify-between bg-red-400'>
      <h1 className='flex flex-row justify-between max-h-min bg-black text-white text-xl font-semibold'>
        - Today's Schedule -{/*{d.toString().split('GMT')[0].trim()}*/}
        <div className='border border-red-500 h-20 w-20 bg-white'>
          {/* <script src={'../../../../node_modules/flowbite/dist/flowbite'}></script> */}
        </div>
        <DropDownMenu 
          optionTitle={'Select Date'}
          menuItems={['test-1', 'test-2']}
        />
        {/* find out how to appropriately load calendar script */}
        {/* <Script src={flowBite} strategy='lazyOnload' /> */}
      </h1>
      <div className='flex flex-col  min-h-full bg-black flex-1'>
        {userSchedule}
      </div>
      <BottomNav show={true} home={false} admin={false}/>
    </div>
  )
}
{/* <script src="../path/to/flowbite/dist/flowbite.js"></script> */}

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