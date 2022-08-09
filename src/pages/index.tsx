import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import MainApp from './MainApp'
import LogInApp from './LogInApp'
// import Image from 'next/image'
// import BottomNav from '../components/navigationComponents/BottomNav'
// import TopNav from '../components/navigationComponents/TopNav'

interface HomeProps {

}

interface HomeState {
  loggedIn: boolean,
  userId: string
}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props)
    this.state = {
      loggedIn: false,
      userId: ''
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleLogin(userName: string, password: string) {
    // add user verification. demo login button works for now.
    if(!this.state.loggedIn) this.setState({loggedIn: true})

  }
  handleLogout() {
    if (this.state.loggedIn) this.setState({loggedIn: false, userId: ''})
  }

  render() {
    return (
      <div>
        <Head>
          <title>Landscaper</title>
        </Head>
        <div>
        { 
          // main app if logged in
          this.state.loggedIn && <MainApp 
            loggedIn={this.state.loggedIn} 
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
          />
        }
        
        {
          // login page to access main app
          this.state.loggedIn || <LogInApp 
            loggedIn={this.state.loggedIn} 
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
          />
        }
        </div>
      </div>
    )
  }
}

export default Home
