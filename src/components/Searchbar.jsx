import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom';
import slugify from 'react-slugify';


function Searchbar() {

  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleSearch = () => {
      // Clear the previous timeout to prevent premature execution
      if (typingTimeout) {
          clearTimeout(typingTimeout);
      }

      // Set a new timeout
      const newTimeout = setTimeout(() => {
          onKeyUp(value);
      }, 500); // Adjust the timeout duration as needed (in milliseconds)

      setTypingTimeout(newTimeout);
  };

  const onKeyUp = (query) => {
    // console.log(query)
    if (query !== "") {
        query = query.trim();

      if (query === "") {
        navigate("/");
      } else {
        navigate(`/search/${slugify(query)}`)
      }
    }
  };

  return (
    <>
    <div className='flex w-[100%] items-center justify-between'>
    <div className='w-[40%] mt-6 ml-11 bg-[#202830] p-1 py-1 rounded-lg flex items-center justify-between '>
    <input className=' bg-transparent text-sm outline-none text-white/90 font-semibold placeholder:text-white/90 pl-3 ' 
     type="text"
     name="searchpanel"
     id="searchpanel"
     placeholder='Search'
     onKeyUp={(e) => handleSearch()}
     value={value}
     onChange={(e) => setValue(e.target.value)}
     />
    <i className="ri-search-line text-zinc-500 mr-3" ></i> 
    </div>
    <div className='flex mr-10'>
    <i className="ri-account-circle-fill text-white/90 mt-6 py-1 px-[8px] bg-[#202830] rounded-lg mr-3"></i>
    <i className="ri-moon-fill mt-6  p py-1 px-[8px] bg-[#202830] text-yellow-400 rounded-lg"></i>
    </div>
    </div>
    </>
  )
}

export default Searchbar

// <input
// type="search"
// name="searchpanel"
// id="searchpanel"
// placeholder='Search Movie'
// className='p-3 w-full mx-10 md:w-[40rem]  rounded-xl outline-none'
// onKeyUp={(e) => handleSearch()}
// value={value}
// onChange={(e) => setValue(e.target.value)}
// />