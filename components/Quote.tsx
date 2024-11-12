import { Item } from '@/types'
import { QuoteContent } from '@/types/Item'
import React from 'react'

const Quote = ({item}: {item: QuoteContent}) => {
  return (
<>
    <div className="max-w-l bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ">     
      <blockquote className="text-xlxitalic font-semibold text-gray-900">
        “{item.text}”
     </blockquote>
      {item.author && 
      <p className="mt-4 text-right text-gray-600">- {item.author}</p>
      }
    </div>
 
    </> )
}

export default Quote