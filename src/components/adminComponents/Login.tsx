import React, { useEffect, useState } from 'react'

interface LoginProps {

}
interface LoginState {
  userName: string,
  password: string,
  test: string
}

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      test: ''
    }
    this.testLogin = this.testLogin.bind(this)
  }
  async testLogin (username: string, password: string) {
    console.log(username, password)
    const loginResult = await fetch(`../../pages/api/1/test@test.com/getemployeebyemail`)
    const test = await fetch('../../pages/api/1/getemployees')
    console.log('test', test)
  }

//   useEffect(() => {
//     // console.log('test', userName, password)
//   }, [userName, password])

  render() {
    const submitButton = (
      <button
        className='border-2 border-black rounded bg-sky-500 hover:bg-sky-700 text-xl text-white font-bold w-min px-2'
        onClick={(e) => {
          e.preventDefault()
          const user = this.state.userName.trim();
          const pass = this.state.password.trim();
          // if (user !== '' && pass !== '') {
            const loginTest = this.testLogin(user, pass);
            console.log(loginTest)
  
          // }
          // this.setState({
          //   test: 'Submit handler working'
          // })
        }}
      >Submit</button>
    )
    return (
      <div className=' h-1/3 border-2 border-black p-4 relative rounded-md'>
      <h1 className='text-2xl mb-1'>Login {this.state.test}</h1>
      <form className='flex flex-col'>
        <div className='w-full flex justify-between'>
          <label className='mr-2'>Email</label>
          <input type={'text'} onChange={e => this.setState({userName: e.target.value})} className='border-2 border-black rounded mb-2 px-1'></input>
        </div>
        <div className='w-full flex justify-between'>
          <label className='mr-2'>Password</label>
          <input type={"text"} onChange={e => this.setState({password: e.target.value})} className='border-2 border-black rounded px-1'></input>
        </div>
        <div className='flex w-full justify-end pt-2 -mb-2'>
          {submitButton}
          {/* <button type={'submit'} onClick={} className='border-2 border-black rounded bg-sky-500 hover:bg-sky-700 text-xl text-white font-bold w-min px-2 '>Submit</button> */}
        </div>
      </form>
    </div>
    )
  }
}

export default Login