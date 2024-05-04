import React from 'react'
import Pro1 from './assets/Images/pro-1.png'
import Pro2 from './assets/Images/pro-2.png'
import Pro3 from './assets/Images/pro-3.png'
import Pro4 from './assets/Images/pro-4.jpg'
import Pro5 from './assets/Images/pro-5.jpg'
import Pro6 from './assets/Images/pro-6.jpg'

function Projects() {
  return (
    <section className='flex-col px-5 py-5 justify-center text-white about-bg-color'>
       <div className='w-full flex-col '>
        <div className='md:px-20'>
        <h1 className='text-4xl text-white  font-bold border-b-4 mb-3 w-[140px] '>Projects</h1>
        <p>These are some of my best projects , I have built these with ReactJS, MERN, VannilaJS, CSS. check them out. </p>
        </div>
        
       </div>
       <div className=' md:px-20'>
       <div className='md:flex w-full  md:gap-5'>
        <div className='relative py-5'>
        <img className='h-[300px] shadow-lg shadow-black' src={Pro1} alt="" />
        <div className='project-desc hover:border-2 border-white'>
            <h1 className='text-2xl py-2'>A2 CHAT APP</h1>
            <p>A chat website. built with MERN stack</p>
            <div className='py-4'>
            <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded'><a href=""></a>More Info</button>
            </div>
            
        </div>
        </div>
        <div className='relative py-5'>
        <img className='h-[300px] shadow-lg shadow-black' src={Pro2} alt="" />
        <div className='project-desc hover:border-2 border-white px-2'>
            <h1 className='text-2xl py-2'>Psh-Spicy Hut!</h1>
            <p>A Restaruant website like a swiggey. built with ReactJs and Tailwind CSS</p>
            <div className='py-4'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'><a href=""></a>More Info</button>
            </div>  
        </div>
        </div>
        <div className='relative py-5'>
        <img className='h-[300px] shadow-lg shadow-black' src={Pro3} alt="" />
        <div className='project-desc  hover:border-2 border-white px-2'>
            <h1 className='text-2xl py-2'>Text to voice converter</h1>
            <p>A Text to voice convert website user enter a text to voice. built with ReactJs and Tailwind CSS</p>
            <div className='py-4'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'><a href=""></a>More Info</button>
            </div>  
        </div>
        </div>
        
        
       </div>
       </div>
       <div className=' md:px-20'>
       <div className='md:flex w-full  md:gap-5'>
        <div className='relative py-5'>
        <img className='h-[300px] shadow-lg shadow-black' src={Pro4} alt="" />
        <div className='project-desc hover:border-2 border-white'>
            <h1 className='text-2xl py-2'>A2 CHAT APP</h1>
            <p>A chat website. built with MERN stack</p>
            <div className='py-4'>
            <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded'><a href=""></a>More Info</button>
            </div>
            
        </div>
        </div>
        <div className='relative py-5'>
        <img className='h-[300px] shadow-lg shadow-black' src={Pro5} alt="" />
        <div className='project-desc hover:border-2 border-white px-2'>
            <h1 className='text-2xl py-2'>Psh-Spicy Hut!</h1>
            <p>A Restaruant website like a swiggey. built with ReactJs and Tailwind CSS</p>
            <div className='py-4'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'><a href=""></a>More Info</button>
            </div>  
        </div>
        </div>
        <div className='relative py-5'>
        <img className='h-[300px] shadow-lg shadow-black' src={Pro6} alt="" />
        <div className='project-desc hover:border-2 border-white px-2'>
            <h1 className='text-2xl py-2'>Text to voice converter</h1>
            <p>A Text to voice convert website user enter a text to voice. built with ReactJs and Tailwind CSS</p>
            <div className='py-4'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'><a href=""></a>More Info</button>
            </div>  
        </div>
        </div>
        
        
       </div>
       </div>
       
    </section>
    
  )
}

export default Projects