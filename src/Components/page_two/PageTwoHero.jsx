import React from 'react'
import HeroList from './PageTwoHeroList'
import PageTwoHerocard from './PageTwoHerocard'
import PageTwoHeroSection from './PageTwoHeroSection'
import PageTwoHeroTopic from './PageTwoHeroTopic'
import PgaeTwoHeroHeader from './PgaeTwoHeroHeader'
import PageTwoHeroFooter from './PageTwoHeroFooter'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='rounded-lg md:mx-[3.4rem] p-3 md:m-auto m-[0.27rem]'>
        <div className='h-full'>
         <PgaeTwoHeroHeader/>
        <PageTwoHeroTopic/>
        </div>
       <div>
      <div className='grid justify-center text-center'>
        <PageTwoHeroSection/>
      
      </div>
      <HeroList/>
      <PageTwoHerocard/>
      <PageTwoHeroFooter/>   
      </div>    
       </div> 
    </div>
  )
}

export default Hero