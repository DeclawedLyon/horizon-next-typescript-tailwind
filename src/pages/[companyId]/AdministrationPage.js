import React from 'react'
import { useRouter } from 'next/router'
import EditSchedule from '../../components/adminComponents/editSchedule';

const admin = () => {
  const router = useRouter();
  const company = router.query.company
  console.log(router.query)
  return (
    <div>
      <h1>Admin Page</h1>
      <EditSchedule />
    </div>
  )
}

export default admin