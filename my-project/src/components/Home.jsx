import React from 'react'
import banner from '../assets/banner.png'

const Home = () => {
  return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id='home'>
            <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
                <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>

                    <div>
                        <img src={banner} alt="" className='lg:h-[500px] hover:scale-75 ease-in duration-300'/>
                    </div>

                    <div className='md:w-3/5'>
                        <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Consult or Visit Us</h2>
                        <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl text-[#3C0A44] font-bold'>At FurryPal, we're all about ensuring your furry friends live their happiest, healthiest lives. Our dedicated team provides top-notch medical care and services to help your pets thrive for years to come.</p>
                        
                        <div className='space-x-5 space-y-4'>
                            <button className='btnPrimary'>Sign Up</button>
                            <button className='btnSecondary'>Learn More...</button>
                        </div>

                    </div>

                    
                </div>
            </div>
        </div>
  );
};

export default Home