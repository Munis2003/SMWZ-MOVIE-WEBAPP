import React, { useContext } from 'react'
import Contextpage from '../Contextpage';
import { HiChevronLeft } from "react-icons/hi";

function Header() {

  const { header, backgenre } = useContext(Contextpage);

  return (
    <>
      <header className={`flex  items-center text-[2.5vw] font-[poppins] font-[400] text-zinc-300 ml-2`}>

        {/* s */}

        {header}
      </header>

    </>
  )
}

export default Header

