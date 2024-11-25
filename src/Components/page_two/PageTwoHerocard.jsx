import React from 'react'

const PageTwoHerocard = () => {
    const descriptions= [
        {
          id: 1,
          title: "Web Developer",
          icon: "/assets/one.svg",
          description:
            "Collabrate with designers to translate visual designs into functional web pages.",
          location: "Paris",
          type: "Remote",
          cartigory: "Colored",
        },
        {
          id: 2,
          title: "Software Developer",
          icon: "/assets/two.svg",
          description:
            "Collabrate with cross-functional teams to gather requirements.",
          location: "New York",
          type: "Remote",
          cartigory: "Fintechy",
        },
        {
          id: 3,
          title: "Graphic Desginer ",
          icon: "/assets/three.svg",
          description:
            "Develop and design marketing collateral, including brochures, flyers , banners , and social media graphics",
          location: "Las Vegas ",
          type: "Remote",
         
          cartigory: "Gradient",
        },
        {
            id: 4,
            title: "Brand Manager",
            icon: "/assets/one.svg",
            description:
              "Develop and execute brand strategies to establish and maintain a strong brand presence",
            location: "Los Angelas",
            type: "Remote",
           
            cartigory: "Greenly ",
          },
          {
            id: 5,
            title: "Social Media Manager",
            icon: "/assets/one.svg",
            description:
              "Develop and implement social media strategies to increase brand awareness and engagement.",
            location: "California",
            type: "Remote",
           
            cartigory: "lineo ",
          },   {
            id: 6,
            title: "Marketing Coordinator ",
            icon: "/assets/one.svg",
            description:
              "Conduct material research to identify target audience , market trends and competitive anaylysis. ",
            location: "London",
            type: "Remote",
           
            cartigory: "Pipe",
          },
      ];

    

      
      return (
        <div>

          <div className='grid md:grid-cols-3 gap-6  '>
            { descriptions.map(description =>

            <div key={description.id} className='border border-[#4A3A7680] m-3  rounded-lg text-[#848484] '>
              <div>


                <div className='grid md:grid-cols-[80px_1fr] p-3 '>
                    <figure className=''>
                      <img src={description.icon} alt="description " />
                    </figure>

                      <div className='grid items-center m-3'>
                        <p className='text-lg text-white'>{description.title}</p>
                        <p>{description.cartigory}</p>
                      </div>
                </div>
                

               <div className=' grid justify-center p-6'>

                <div className='h-20 text-base'>
                  <p>{description.description}</p>
                
                </div>

                <hr />

               </div>

             



                <div className='grid grid-cols-[130px_1fr] justify-start mx-4'>
                <div className="flex items-center gap-2">
                      <figure>
                        <img src={`/assets/location.svg`} alt="Location" />
                      </figure>
                      <p>{description.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <figure>
                        <img src={`/assets/remote.svg`} alt="Remote" />
                      </figure>
                      <p>{description.type}</p>
                    </div>


                </div>

                <div className='p-4'>
                    <button className="bg-white text-black w-[78.47px] rounded-full py-1 text-[16px]">
                      Apply
                    </button>

                </div>
              </div>

             





            </div>
              
            
              
              
              
              
              )}




          </div>

     
        
    
        

      

    

       
    </div>
  )
}

export default PageTwoHerocard