import React from 'react'

const HeroList = () => {
  return (
    <div>

        
      <div className='grid grid-cols-2 md:grid-cols-8 gap-2 text-center text-lg p-10 '>
        <p className='heroViewStyle rounded-lg md:p-4 '>View all </p>
        <p className='heroBorder rounded-lg p-4'>Digital </p>
        <p className='heroBorder rounded-lg p-4'> Engineering </p>
        <p className='heroBorder rounded-lg  p-4'>Management</p>
        <p className='heroBorder rounded-lg p-4'>Finance</p>
        <p className='heroBorder rounded-lg  p-4'>Marketing</p>
        <p className='heroBorder rounded-lg p-4'>Design</p>
        <p className='heroBorder rounded-lg p-4'>Development</p>
      </div>


    </div>
  )
}

export default HeroList