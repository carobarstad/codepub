import { ImageContent } from '@/types/Item'
import React from 'react'
import Image from "next/image"

const ImageComponent = ({item}: {item: ImageContent}) => {
  return (
    <Image alt={item.alt} src={item.src}/>
  )
}

export default ImageComponent