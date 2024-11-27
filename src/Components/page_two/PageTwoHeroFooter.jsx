import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const PageTwoHeroFooter = () => {
  return (
    <div className='grid justify-center'>
          <button className="bg-white ml-16 py-2 right-[1rem] gap-2 px-4 flex items-center rounded-full">
                  <p className="font-bold text-base text-black">View more</p>
                  <FaArrowRight className="text-[#A34AE3]" />
           </button>
    </div>
  )
}

export default PageTwoHeroFooter