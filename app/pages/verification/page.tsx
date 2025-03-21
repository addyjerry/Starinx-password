'use client'
import Button from '@/app/components/Button'

import React,{useState,useEffect} from 'react'

const Verify = () => {
    const inputs=[{
        id: 1,
        num:null,

    },
    {
        id: 2,
        num:null,

    },
    {
        id: 3,
        num:null,

    },
    {
        id: 4,
        num:null,

    },]

    const [ time,setTime] =useState(60)
     const handleTime=()=>{
    if(time<=0){
        
        setTime(time)
        }
    }
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(time-1)
            handleTime();
        },1000)
        return ()=>clearInterval(interval);     
    });

   


  return (
    <div className="p-20 bg-blue-300">
        <div className='bg-white place-self-center text-center p-10 m-4'>
            <h1 className="text-blue-500 text-5xl font-500 py-5">Verification</h1>
            <p>Enter your 4 digits code that you received on your email/phone</p>
            <div>
                {inputs.map((input)=>(
                    <input type="text" maxLength={1} key={input.id} className='p-1 text-5xl text-center size-15 border border-black-100 m-2 rounded lg:size-20 lg:text-5xl lg:m-5'/>
                ))}
            </div>
            
       <Button chidlren={'VERIFY'}/> <br />
            <p className='text-center text-xl'>00:{time}</p>
            <p>If you did not receive a code <b className='text-red-300'>Resend</b></p>
            
        </div>
    </div>
  )
}

export default Verify