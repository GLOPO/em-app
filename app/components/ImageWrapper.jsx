import React from 'react'
import Image from 'next/image'

const Images = ({src, alt, width, height, objectFit}) => {
  return (
    <>
      <div style={{position: 'relative', width: width, height: height}}>
        <Image src={src} alt={alt} fill objectFit= {objectFit} />
      </div>
    </>
  )
}

export default Images