import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BottomNav from '../components/navigationComponents/BottomNav'
import TopNav from '../components/navigationComponents/TopNav'
import MainApp from './MainApp'
import LogInApp from './LogInApp'

const Home: NextPage = () => {
  const loggedIn = true;
  return (
    <div>
      <Head >
        <title>Horizon Maps</title>
      </Head>
      {loggedIn && <MainApp loggedIn={loggedIn}/>}
      {loggedIn || <LogInApp loggedIn={loggedIn}/>}
    </div>
  )
}

export default Home
