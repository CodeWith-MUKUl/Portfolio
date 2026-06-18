import React from 'react'

function Work() {

  let data = [
    {img: "/Assets/images/obys2.png", name: "Obys Agency", text:"lorem ipsum, dolor sit amet ur adipisicing elit. Incidunt, corporis?"},
    {img: "/Assets/images/obys.jpg", name: "Obys Agency", text:"lorem ipsum, dolor sit amet ur adipisicing elit. Incidunt, corporis?"},
    {img: "/Assets/images/obys.jpg", name: "Obys Agency", text:"lorem ipsum, dolor sit amet ur adipisicing elit. Incidunt, corporis?"},
  ]


  return (
    <div className='max-w-[1440px] mx-auto mt-10 px-5 lg:px-0'>
        <h1 className='text-7xl w-1/2 font-anton lg:w-full uppercase lg:text-center lg:my-[15vw] lg:text-[10vw] '>Latest Work</h1>
        
      {data.map((val ,indx)=>(
                  <div key={indx} className='flex flex-col bg-red-70 mt-10 font-geist lg:flex-row lg:flex-row-reverse lg:justify-between'>
                    <div className='w-full h-68 rounded-2xl overflow-hidden lg:w-[60vw] lg:h-[80vh]'>
                    <img className='w-full h-full object-cover' src={val.img} alt="" />
                </div>

                <div className='flex flex-col justify-between work-text lg:h-[80vh]'>
                  <div className='hidden lg:block'>
                    <h1 className='font-anton text-9xl ml-3 text-[#333333]'>01<span className='text-6xl'>.</span></h1>
                    <div className='flex items-center gap-2 mt-10 -ml-3'>
                      <div className='w-[10px] h-[.8px] bg-[#333333]'></div>
                      <p className='tracking-tight'>{val.name}</p>
                    </div>
                  </div>
              <div className=''>
              <h1 className='text-4xl tracking-tighter mt-5 lg:text-5xl'>{val.name}</h1>
              <p className='leading-none mt-3 text-lg text-grey lg:w-2/3 lg:text-xl lg:mt-6'>{val.text}</p>
              </div>
                </div>
                  </div>
                ))}
        </div>
  )
}

export default Work