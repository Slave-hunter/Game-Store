import React, { useEffect } from 'react'

function Banner({gameBanner}) {
    useEffect(()=>{
        console.log("gameBanner",gameBanner)

    })
  return (
    <div>
        <img src={gameBanner.background_image} className='md:h-[320px] w-full object-cover rounded-lg'/>

    </div>
  )
}

export default Banner