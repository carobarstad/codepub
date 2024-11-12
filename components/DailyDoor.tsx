import React from 'react'
import { DailyDoorItem } from '../types/'

const DailyDoor = ({title, subtitle,  backgroundImageSrc}: DailyDoorItem) => {

  //TODO: see if possible to have as background

  return (
    <div className='border border-blue-600 bg-blue-300 rounded w-40 h-40'>
        <h1>{title}</h1>
        {subtitle && <h1>{subtitle}</h1>}
    </div>
  )
}

export default DailyDoor