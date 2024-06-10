import { Link } from "react-router-dom";
import { RiOpenaiFill } from "react-icons/ri";

function Navbar() {
    return (
        <>
        <div id="nav" className ='fixed w-[20%] h-screen p-6 border-r-[1.4px]  border-[#202830] bg-[#0a1016]'>
            <img className='w-[100px]' src="/public/Logo.png" alt="" />
            
            <nav className='menu text-white/90 mt-7 flex flex-col'>
            <h1 className='uppercase font-semibold text-[15px] mb-4'>menu</h1>
            <Link to='/' className='text-[17px]  text-zinc-300 hover:text-white/90 hover:font-semibold p-3 pl-0'> <i className="ri-home-5-fill rounded-lg px-[8px] py-2"></i>Explore</Link>
    <Link to='/trending' className='text-[17px]  text-zinc-300 hover:text-white/90 hover:font-semibold p-3 pl-0 '><i className="ri-play-fill rounded-lg px-[8px] py-2"></i>Trending</Link>
    <Link to='/upcoming' className='text-[17px]  text-zinc-300 hover:text-white/90 hover:font-semibold p-3 pl-0 '><i className="ri-tv-2-fill rounded-lg px-[8px] py-2"></i>Upcoming</Link>
            </nav>
    
            <nav className='menu text-white/90 mt-7 flex flex-col border-t-[1.4px] border-[#202830]'>
            <h1 className='uppercase font-semibold text-[15px] mt-7 mb-4'>misc</h1>
            <Link className='text-[17px] text-zinc-300 hover:text-white/90 hover:font-semibold p-3 pl-0'> <i className="ri-information-fill rounded-lg px-[8px] py-2"></i>About Us</Link>
            <Link className='text-[17px] text-zinc-300 hover:text-white/90 hover:font-semibold p-3 pl-0' ><i className="ri-customer-service-fill rounded-lg px-[8px] py-2"></i>Contact Us</Link>
            <div className='flex cursor-pointer items-center gap-2 text-[17px] text-zinc-300 hover:font-semibold p-3 pl-0'>
        <div className="bg-[#202830] hover:bg-white hover:text-yellow-400 px-[8px] py-2 rounded-lg"> <RiOpenaiFill/></div>
          <p>GPT Search</p>
        </div>
            </nav>

        </div>
        </>
      )
}

export default Navbar


// <div onClick={handleGptSearch} className='flex cursor-pointer items-center gap-2 pl-0 text-md text-zinc-400 hover:text-white py-2 px-[12px]  '>
//         <RiOpenaiFill/>
//           <p>{ showGptSearch ? 'Homepage' :'GPT Search'}</p>
//         </div>

