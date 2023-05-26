import React from 'react'


const Regsign = () => {
  return (
    <div className='bg-[#e9e9e9]  py-2 h-[700px]'>
        {/* // its cols not col wated my 20mins*/}
    <div className='max-w-[1260px] mx-auto flex justify-between'>
        <div className='border border-black m-1 flex flex-col  justify-center py-[20px]'>
            <h1 className=' font-bold text-2xl md:text-5xl'>Unlock Exclusive Offer!</h1>
            <span className='ms-[100px] '>Sign up to our newsletter and stay up to data.</span>            
        </div>

        <div className=' flex md:justify-center border border-black'>

            <input type="text" className='w-[130px] h-[50px] me-2 rounded' placeholder='example@gmail.com' name="" id="" />
            <button className='w-[90px] bg-black text-white rounded h-[50px]'>Register</button>
            <br/> 
            <p className='mt-2 text-[14px]'>We care about the protection of your data. </p>
        </div>
            <div>

            </div>


            </div>
    </div>
  )
}

export default Regsign;