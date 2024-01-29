import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Signup:React.FC<any>=()=>{
    const [user,setUser]=useState({email:"",password:""});

    const textChange=(e:any)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const signup=()=>{

    }
    return(
        <>
        <div>
      <div className='fixed w-[100%] h-[100%] top-0  left-0 bg-black bg-opacity-50 z-10'></div>
        <div className='flex w-[100vw] h-[80vh] justify-center'>
            <div className='flex-row mt-[80px] bg-white h-[360px] w-[650px] z-20 rounded-lg pt-10 '>
                <h1 className='w-[100%] h-20 text-center text-[30px] font-bold text-orange-500'>Sign Up
                <Link  className='relative h-[30px] w-[30px] top-[-80px] right-0' to="/"><img className='cursor-pointer h-[30px] w-[30px]' src="/cross.png" alt="" /></Link>
                </h1>
                <h1 className='h-8 text-center text-lg'>What's your email?</h1>
                <div className='w-[100%] flex justify-center'>
                <input className='h-[40px] w-[50%] rounded-lg p-4 font-sans border border-black' type="text" placeholder='Enter email' onChange={textChange}/>
                </div> 
                <h1 className='h-8 text-center text-lg'>What's your password?</h1>
                <div className='w-[100%] flex justify-center'>
                <input className='h-[40px] w-[50%] rounded-lg p-4 font-sans border border-black' type="text" placeholder='Enter password' onChange={textChange}/>
                </div> 
                <div className='w-[100%] flex justify-center'>
                <button className= 'border border-orange-500 bg-orange-500 hover:bg-orange-400 h-10 w-[200px] rounded-lg text-white mt-4 ' onClick={signup}>Continue</button>
                </div>

                

            </div>

        </div>
    </div>
        </>
    )
}