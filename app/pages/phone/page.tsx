import React from 'react'
import Link from 'next/link'
import Button from '../../components/Button'

const page = () => {
  return (
    <div className="p-20 bg-blue-300">
        <div className='bg-white place-self-center p-10 m-4'>
            <h1 className="text-blue-500 text-5xl font-500 py-5">LOGO</h1>
           <h2 className="text-green-500 text-3xl font-500 py-5">Forgot password</h2>
           <p className='py-2'>Enter your email for verification process,we  will send 4 digits code to your email</p>
            <label >Phone Number</label> <br />
           <input type="number"  placeholder="Enter phone number" className='border border-black-100 rounded text-xl p-2 w-80 lg:w-100'/><br />
          <Button chidlren={'CONTINUE'}/> <br />
           <Link href='/' className="text-blue-300 pointer-hand">Use email address</Link>
           </div>
       </div>
  )
}

export default page