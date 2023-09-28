import React from 'react'
import featuredImg from '../assets/petcafe01.jpg'
import featuredPic from '../assets/petcafe02.jpg'

const Features = () => {
  return (
        <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                <div className='lg:w-1/2'>
                    <h2 className='text-3xl text-[#3C0A44] font-bold lg:w-1/2 mb-3'>We Offer Best Services </h2>
                    <p className='lg:w-1/2 text-base text-slate-500 mb-3'>Discover a world of pampering and care for your furry friends, including expert boarding, fun-filled daycare, luxurious spa and grooming, and top-notch training services at our pet center.</p>

                    <button className="bg-yellow-400 hover:bg-purple-300 text-white font-bold py-2 px-4 rounded outline-none focus:outline-none focus:ring focus:ring-blue-200">More Photos...</button>

                </div>

                <div className='w-full lg:w-3/4'>
                    <div className='grid md:grid-cols-2 items-start md:gap-12 gap-8'>

                        <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <div>
                                <img src={featuredImg} alt="" className="w-60 h-auto mx-auto rounded"/>
                                <h4 className='text-lg font-semibold text-[#3C0A44] px-3 text-center mt-5'>Experience worry-free vacations knowing your beloved pets are enjoying a cozy and safe stay in our boarding facilities.</h4>
                            </div>  
                        </div>

                        <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-12'>
                            <div>
                                <img src={featuredPic} alt="" className="w-60 h-auto mx-auto rounded"/>
                                <h4 className='text-lg font-semibold text-[#3C0A44] px-3 text-center mt-5'>Give your furry friends the joy of play and socialization in our daycare center, where they'll have a tail-wagging good time!</h4>
                            </div>  
                        </div>
{/* 
                        <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <div>
                                <img src={featuredImg} alt="" className="w-60 h-auto mx-auto"/>
                                <h4 className='text-lg font-semibold text-[#3C0A44] px-3 text-center mt-5'>Treat your pets to a pampering session in our grooming and spa facilities, where they'll emerge looking and feeling their very best.</h4>
                            </div>  
                        </div>

                        <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-12'>
                            <div>
                                <img src={featuredImg} alt="" className="w-60 h-auto mx-auto"/>
                                <h4 className='text-lg font-semibold text-[#3C0A44] px-3 text-center mt-5'>Watch your furry friends grow into their best selves with our dedicated training programs, ensuring they're well-behaved and full of joy.</h4>
                            </div>  
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
  );
};

export default Features