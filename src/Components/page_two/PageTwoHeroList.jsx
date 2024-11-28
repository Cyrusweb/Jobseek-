import React from 'react'

const HeroList = () => {
  return (
    <div>

        
      {/* <div className='grid grid-cols-2 md:grid-cols-8 gap-2 text-center text-lg mb-10 md:mx-8 mx-3 '>
        <p className='heroViewStyle rounded-lg p-2 '>View all </p>
        <p className='heroBorder rounded-lg p-2'>Digital </p>
        <p className='heroBorder rounded-lg p-2'> Engineering </p>
        <p className='heroBorder rounded-lg  p-2'>Management</p>
     
        <p className='heroBorder rounded-lg p-2'>Finance</p>
        <p className='heroBorder rounded-lg  p-2 '>Marketing</p>
        <p className='heroBorder rounded-lg p-2'>Design</p>

     
        <p className='heroBorder rounded-lg p-2 '>Development</p>
      </div> */}


<div className="grid grid-cols-6 md:grid-cols-8 gap-2 text-center text-lg mb-10 md:mx-8 mx-3">
 
  <p className="heroViewStyle rounded-lg p-2 col-span-3 md:col-span-1 md:ml-0 ml-8 ">View all</p>
  <p className="heroBorder rounded-lg p-2 col-span-3 md:col-span-1 md:mr-0 mr-8 ">Digital</p>
  <p className="heroBorder rounded-lg p-2 col-span-3 md:col-span-1 md:ml-0 ml-1">Engineering</p>
  <p className="heroBorder rounded-lg p-2 col-span-3 md:col-span-1 md:mr-0 mr-1">Management</p>
  <p className="heroBorder rounded-lg p-2 col-span-2 md:col-span-1">Finance</p>
  <p className="heroBorder rounded-lg p-2 col-span-2 md:col-span-1">Marketing</p>
  <p className="heroBorder rounded-lg p-2 col-span-2 md:col-span-1">Design</p>
  <p className="heroBorder rounded-lg p-2 col-span-6 md:col-span-1  mx-16  md:mx-0">Development</p>
</div>



    </div>
  )
}

export default HeroList