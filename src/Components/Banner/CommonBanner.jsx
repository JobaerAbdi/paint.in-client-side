import React from 'react'
import bannerImg from '../../../src/assets/Instructor/banner2.jpg'
import Button from '../Button/Button';

function CommonBanner({bannerData}) {

    const { title, description, bannerImage} = bannerData;


  return (
    <div className='md:flex md:mx-16 lg:mx-32 my-2 px-10 shadow-xl '>
        <div className='basis-1/2 my-10 mr-5'>

            <h1 className=' text-2xl md:text-4xl lg:text-5xl font-sans font-bold text-gray-500 mb-3 xl:mb-10'>{title}</h1>
            <h1 className='text-lg md:text-xl lg:text-2xl font-serif'>{description}</h1>
            <div className='w-fit mx-auto my-5 xl:mt-8  shadow-2xl'>
              {/* <button className=' my-5 xl:mt-12 text-white px-2 md:px-10 text-xs md:text-lg btn btn-secondary btn-xs md:btn-md'>See More</button> */}
              <button class="shadow-2xl px-6 py-2 rounded text-white bg-gradient-to-r from-pink-500 to-fuchsia-500">See more</button>
            </div>
        </div>
        <img className=' my-10 md:w-1/2 basis-1/2'  src={bannerImg} alt='banner'></img>
    </div>
  )
}

export default CommonBanner