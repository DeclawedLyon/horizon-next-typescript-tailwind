import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import BottomNav from '../components/navigationComponents/BottomNav'
import TopNav from '../components/navigationComponents/TopNav'
import MainApp from './MainApp'
import LogInApp from './LogInApp'

interface HomeProps {

}

interface HomeState {
  loggedIn: boolean
}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props)
    this.state = {
      loggedIn: true
    }
  }
  render() {
    return (
      <div>
        <Head>
          <title>Landscaper</title>
        </Head>
        <div>
        {this.state.loggedIn && <MainApp loggedIn={this.state.loggedIn}/>}
        {this.state.loggedIn || <LogInApp loggedIn={this.state.loggedIn}/>}
        </div>
      </div>
    )
  }
}
// const Home: NextPage = () => {
//   const loggedIn = true;
//   return (
//     <div>
//       <Head >
//         <title>Horizon Maps</title>
//       </Head>
//       {loggedIn && <MainApp loggedIn={loggedIn}/>}
//       {loggedIn || <LogInApp loggedIn={loggedIn}/>}
//     </div>
//   )
// }

export default Home
