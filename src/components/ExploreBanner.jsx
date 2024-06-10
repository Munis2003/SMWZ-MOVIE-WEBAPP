import React from 'react'
import { Link } from "react-router-dom";

const ExploreBanner = () => {
  return (
    <>
    <div className='ml-1 mb-10'>
        <h1 className='text-[2.5vw] font-semibold  text-zinc-300'>Explore</h1> 
        <div className='bg-[#051725] backdrop-blur-xl relative w-[100%] rounded-3xl p-9 mt-4 flex justify-center'>
           
            <div>
            <p className='text-[2.3vw] font-[700] w-[40%] text-white/90 leading-[35px]'>Keep track of all the TV shows and Movies you want to watch.</p>   
            
            <div className='mt-7 flex items-center gap-5'>
              <img className='w-[75px] border-[1.5px] border-yellow-400 rounded-3xl px-3 py-2' src="public/logo.png" alt="" />
            <div>
            <p className='text-zinc-100 font-semibold text-xl'>Yes, It's all free</p>
            <ul className='flex items-center gap-6 text-zinc-100 font-semibold text-sm'>
              <li>HD Quality</li>
              <li className='list-disc'>CC</li>
              <li className='list-disc'>Watchlist</li>
            </ul>
            </div>
            </div>
            </div>
 
            <div className='absolute bottom-[0%] left-[75%] overflow-hidden'>
              <img className='w-[200px] object-cover' src="/public/dp.png" alt="" />
            <div>
            <Link to='/trending' className='flex items-center justify-center absolute top-[88%] left-[12%] h-[6%] border-[1.4px] border-white/90 bg-[#202830]/70 py-[10px] px-4  blur-[0.5px] text-xs  rounded-md  font-[500] text-white/90 '>Movies</Link>
            <Link to='/' className='flex items-center justify-center absolute top-[88%] left-[53%] h-[6%] border-[1.4px] border-yellow-400/90 bg-[#202830]/70 py-[10px] px-4  blur-[0.5px] text-xs  rounded-md  font-[500] text-white/90 '>Join Us</Link>
            </div>
            </div>
            
        </div>

        
    </div>
    </>
  )
}

export default ExploreBanner;


// https://pngimg.com/d/captain_america_PNG36.png