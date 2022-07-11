import React, { useEffect, useState } from 'react'

const ScheduleTimeSlot = (props) => {
  const [selected, setSelected] = useState(false)
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
    <div onClick={() => selected ? setSelected(false) : setSelected(true)} className={`flex min-w-auto h-full m-1  ${selected ? 'bg-sky-500' : 'bg-cyan-300'} flex-1 justify-between cursor-pointer`} key={`plan:${props.startTime}-${props.endTime}`}>
      <div className='flex flex-col w-20 h-auto px-2 max-h-full justify-center items-center border-r-2 border-black'>
        <div>
          {props.startTime}
        </div>
        <div>

        </div>
        <div>
          {props.endTime}
        </div>
      </div>
      <div className='flex w-full justify-center items-center'>
        {props.nickname}
        {selected && props.description}
      </div>
    </div>
  )
}

export default ScheduleTimeSlot