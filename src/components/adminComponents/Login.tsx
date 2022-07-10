import React, { useEffect, useState } from 'react'

export interface LoginProps {

}

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const testLogin = async (username: string, password: string) => {
    console.log(username, password)
    const loginResult = await fetch(`../../pages/api/1/test@test.com/getemployeebyemail`)
    const test = await fetch('../../pages/api/1/getemployees')
    console.log('test', test)
  }
  const submitButton = (
    <button
      className='border-2 border-black rounded bg-sky-500 hover:bg-sky-700 text-xl text-white font-bold w-min px-2'
      onClick={(e) => {
        e.preventDefault()
        const user = userName.trim();
        const pass = password.trim();
        if (user !== '' && pass !== '') {
          const loginTest = testLogin(user, pass);

        }
      }}
    >Submit</button>
  )
  useEffect(() => {
    // console.log('test', userName, password)
  }, [userName, password])
  return (
    <div className=' h-1/3 border-2 border-black p-4 relative'>
      <h1 className='text-2xl mb-1'>Login</h1>
      <form className='flex flex-col'>
        <div className='w-full flex justify-between'>
          <label className='mr-2'>UserName</label>
          <input type={'text'} onChange={e => setUserName(e.target.value)} className='border-2 border-black rounded mb-2 px-1'></input>
        </div>
        <div className='w-full flex justify-between'>
          <label className='mr-2'>Password</label>
          <input type={"text"} onChange={e => setPassword(e.target.value)} className='border-2 border-black rounded px-1'></input>
        </div>
        <div className='flex w-full justify-end pt-2 -mb-2'>
          {submitButton}
          {/* <button type={'submit'} onClick={} className='border-2 border-black rounded bg-sky-500 hover:bg-sky-700 text-xl text-white font-bold w-min px-2 '>Submit</button> */}
        </div>
      </form>
    </div>
  )
}

export default Login