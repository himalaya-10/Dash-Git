import React from "react";
import { Link } from "react-router-dom";

interface HeadProps{

}
export const Head:React.FC<HeadProps>=()=>{
    return(
        <>
        <div className="navbar transition-all ease-in-out 0.5s h-[80px] w-[100vw] flex items-center sticky top-0">
            <div className="w-[70%] p-3 text-[30px] flex select-none"><img className="h-[50px] w-[50px]" src="./dash.png" alt="D" /><Link to="/" className="ml-4 font-semibold">Dash</Link></div>
            <div className="w-[30%] p-3 text-[18px] flex justify-between">
            <Link to="/about" className='w-[80px] h-8 flex items-center justify-center rounded-[20px]  cursor-pointer select-none  mr-2  under'>About</Link>
            <Link to="/login" className='w-[80px] h-8 flex items-center justify-center rounded-[20px]  cursor-pointer select-none mr-2 under ' >Log in</Link>
            <Link to="/signup" className='w-[80px] h-8 flex items-center justify-center rounded-[20px] cursor-pointer select-none  bg-orange-500 text-white hover:text-white hover:bg-orange-400' >Sign Up</Link>
            </div>
        </div>
        </>
    )
}