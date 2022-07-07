import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BottomNav from '../components/navigationComponents/BottomNav'
import TopNav from '../components/navigationComponents/TopNav'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen max-h-screen flex-col items-center justify-between">
      <Head >
        <title>Login</title>
      </Head>
      <TopNav loggedIn={true}/>
      <h1 className="text-xl text-cyan-500 ">
        Welcome! 
      </h1>
      <BottomNav />
    </div>
  )
}

export default Home
