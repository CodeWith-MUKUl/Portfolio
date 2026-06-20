import React from 'react'

function Whyme() {
  return (
    <div className='whyMe mt-10 px-5 lg:px-10 lg:pt-30'>
        <h1 className='text-grey mt-0 mb-4 text-xl lg:text-xl uppercase font-bold lg:mt-0'>(Why me)</h1>
  <div className='lg:flex lg:items-end justify-between'>
  <h1 className='uppercase text-5xl font-anton lg:text-9xl lg:ml-10'>Numbers <br /> that matters</h1>
  <p className='mt-5 leading-5 tracking-tight lg:w-1/3 lg:text-2xl font-geist lg:text-grey lg:leading-6'><span className='ml-10'>Building</span> modern, responsive, and interactive digital experiences with a strong focus on frontend performance, animation, and clean user interfaces.</p>
  </div>
        <div className='grid grid-cols-2 mt-5 lg:grid-cols-4 lg:mt-20'>
            {[
                {num:9, spantext:"+",text: "Months Internship Industry Experience" },
                {num:3, spantext:"+",text: "Startup Collaborations" },
                {num:7, spantext:"+",text: "Projects Built" },
                {num:8, spantext:".05",text: "BCA CGPA" },
            ].map((item, i) => (
                <div className='stats-section mt-2 lg:mt-10 lg:py-10'>
                    <div 
                  key={i}
                  className="border-l border-l-grey/9 px-2 py-12 my-10 h-42 flex flex-col justify-center gap-2 lg:pl-5"
                >            
                  <h2 className='text-6xl font-bold lg:text-8xl'>{item.num}<span>{item.spantext}</span></h2>
                  <p className='lg:text-lg'>{item.text}</p>
                </div>
                </div>
              ))}

        </div>
        
    </div>
  )
}

export default Whyme