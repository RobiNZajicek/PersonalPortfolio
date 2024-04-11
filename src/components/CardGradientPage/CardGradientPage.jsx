import React from 'react'
import { CardGradient } from '../CardGradient/CardGradient'

const CardGradientPage = () => {
  return (
    <div className='cardPage'>
        <div className='flex flex-row gap-8 justify-center'>
            <div><CardGradient/></div>
            <div><CardGradient/></div>
            <div><CardGradient/></div>
            
        </div>
    </div>
  )
}

export default CardGradientPage