import Image from 'next/image'
import React from 'react'


function Logo({width,rounded}:{width:number,rounded?:string}) {
  return (
    
    <Image src="/logo.png"  alt="logo" width={width} height={width} className={`rounded-${rounded || 'none'}`} />
  )
}

export default Logo