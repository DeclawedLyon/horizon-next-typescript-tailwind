import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import MapWindow from '../../../components/mapComponents/MapWindow'
import Link from 'next/link'

const Map = () => {
  const [cutListSelection, setCutListSelection] = useState('nadenCutList')
  const [selectedCutList, setSelectedCutList] = useState([])
  const router = useRouter()
  const currentUser = router.query.user
  const companyName = router.query.company

  const fetchSelectedCutList = async (selection) => {
    const response = await fetch(`../../api/horizon/cuts/${selection}`)
    const fetchedCutList = await response.json()
    console.log(fetchedCutList)
    setSelectedCutList(fetchedCutList)
  }

  useEffect(() => {
    fetchSelectedCutList(cutListSelection)
  }, [cutListSelection])
  return (
    <>
      {/* <div>Map Window</div> */}
      {/* <button onClick={() => fetchSelectedCutList('nadenCutList')}>FetchNadenCuts</button> */}
      <button onClick={() => setCutListSelection('nadenCutList')}>Naden</button>
      <button onClick={() => setCutListSelection('colvilleCutList')}>Colville</button>
      <MapWindow 
        userName={currentUser}
        companyName={companyName}
        cutList={selectedCutList}
        devMode={true}
      >
      </MapWindow>
      <Link as={'/'} href='/'>
        <button>Home</button>
      </Link>
    </>
  )
}

export default Map

export async function getServerSideProps() {
  const apiKey = process.env.REACT_APP_API_KEY
  console.log(apiKey)
  return {
    props: {

    }
  }
}