import React from 'react'


const Gallery = () => {
  return (

    <section className="mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div>
            <div className='grid md:grid-cols-2 items-start md:gap-4'>

                <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-1 gap-2'>
                            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                                <img className='row-span-2 object-cover w-full h-full p-2 hover:scale-75 ease-in duration-500' src="./images/PetCare01.jpg" alt="/" />
                                <img className='object-cover w-full h-full p-2 hover:scale-75 ease-in duration-500' src="./images/PetCare02.jpg" alt="/" />
                                <img className='row-span-3 object-cover w-full h-full p-2 hover:scale-75 ease-in duration-500' src="./images/PetCare03.jpg" alt="/" />
                                <img className='object-cover w-full h-full p-2 hover:scale-75 ease-in duration-500' src="./images/PetCare04.jpg" alt="/" />
                                <img className='row-span-2 object-cover w-full h-full p-2 hover:scale-75 ease-in duration-500' src="./images/PetCare05.jpg" alt="/" />
                                <img className='object-cover w-full h-full p-2 hover:scale-75 ease-in duration-500' src="./images/PetCare11.jpg" alt="/" />
                            </div>
                </div>


                <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-1 gap-2'>
                            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                                <img className='object-cover w-full h-full p-2 hover:scale-75 ease-in duration-500' src="./images/PetCare06.jpg" alt="/" />
                                <img className='row-span-2 object-cover w-full h-full p-2 hover:scale-75 ease-in duration-500' src="./images/PetCare07.jpg" alt="/" />
                                <img className='object-cover w-full h-full p-2 hover:scale-75 ease-in duration-500' src="./images/PetCare08.jpg" alt="/" />
                                <img className='row-span-3 object-cover w-full h-full p-2 hover:scale-75 ease-in duration-500' src="./images/PetCare09.jpg" alt="/" />
                                <img className='row-span-2 object-cover w-full h-full p-2 hover:scale-75 ease-in duration-500' src="./images/PetCare10.jpg" alt="/" />
                                <img className='object-cover w-full h-full p-2 hover:scale-75 ease-in duration-500' src="./images/PetCare12.jpg" alt="/" />
                            </div>
                </div>



            </div>
        </div>
    </section>
  )
}

export default Gallery