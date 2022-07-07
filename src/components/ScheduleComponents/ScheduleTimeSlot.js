import React, { useEffect, useState } from 'react'

const ScheduleTimeSlot = (props) => {
  // const [details, setDetails] = useState()
  // const formatDetailsElement = (planArr) => {
  //   let formattedPlans = []
  //   if (planArr.length > 1) {
  //     formattedPlans = planArr.map((plan, i) => {
  //       if (i === 0) {
  //         return (
  //           <div className='time-slot-one'>{plan}</div>
  //         )
  //       } else {
  //         return <div className='time-slot-two'>{plan}</div>
  //       }
  //     })
  //   } else {
  //     // consider if timeslot one should be full timeslot 
  //     console.log('plan array',planArr[0])
  //     formattedPlans.push(
  //       <div className='time-slot-one'>{planArr[0]}</div>
  //     )
  //   }
  //   setDetails(formattedPlans)
  // }
  // useEffect(() => {
  //   formatDetailsElement(props.plan)
  // }, [props.plan])
  return (
    <div className='min-w-auto h-full m-1 bg-cyan-500 flex-1' key={`plan:${props.startTime}-${props.endTime}`}>
      <div className='schedule-time-selection'>
        {props.startTime} - {props.endTime}
      </div>
      <div className='schedule-details'>
        {props.nickname}
        {props.description}
      </div>
    </div>
  )
}

export default ScheduleTimeSlot