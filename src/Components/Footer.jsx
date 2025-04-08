import React from 'react'

function Footer() {
  return (
    <div className='bg-[#141024] py-5'>
      <div className="container flex justify-between items-start flex-wrap gap-5 max-[500px]:justify-center text-white">
        <div className="max-[500px]:justify-center flex flex-col items-start max-[500px]:items-center">
          <h1 className="text-4xl text-white pb-2 font-bold">ROBO.SCHOOL</h1>
          <a href="" className="text-white/50 max-[500px]:text-center">© ROBO.SCHOOL</a>
        </div>
        <a href="tel:+7 800 000 11 22" className="text-white text-2xl font-medium">+7 800 000 11 22</a>
      </div>
    </div>
  )
}

export default Footer