import React from 'react'
import Typed from 'react-typed'

const Banner = () => {
  return (
    <div className='bg-[#e9e9e9] xs:h-[500px] w-full py-[100px]'>
    <div className='max-w-[1240px] my-[100px] mx-auto text-center'>
            <div className='text-[25px] xs:text-[10px] md:text-[50px]'>hellow are you ready!</div>
            <div className='text-[40px] md:text-[70px]'>Learn with us</div>
            <div className='text-[20px] md:text-[30px]'>heh!

            <Typed 
            className='pl-2'
            strings={["order favorite!", "are you hungry?", "lets begin!!"]}
            typeSpeed={100}
            backSpeed={10}
            loop={true}

            />


             </div>
                <button className='bg-black text-white p-3 mt-2 rounded'>Order Now!</button>
    </div>
        
    </div>
  )
}

export default Banner