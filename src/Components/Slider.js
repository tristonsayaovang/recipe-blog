import React, { useState } from 'react'
import SliderData from './SliderData'
import { ImArrowLeft, ImArrowRight } from 'react-icons/im'
import './Slider.css'

const Slider = ({slides}) => {
const [current, setCurrent ] = useState(0)
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}

    if(!Array.isArray(slides) || slides.length <=0 ){
        return null
    }

  return (
    <section className=' slider-section'>
        <ImArrowLeft onClick={prevSlide}
        class='h-10 w-10 absolute top-1/2 left-8 
        text-lg text-white z-10 cursor-pointer select-none 
        border-2 border-white rounded bg-slate-500 opacity-50
        hover:scale-110 hover:opacity-80' />


    {SliderData.map((slide, index) => {
        return(
            <>
         
            <div 
            className={index === current ? 'slide active w-full' : 'slide w-full'}
            key={index}
            >
                {index === current && (
                <img className='gallery_image' src={slide.image} alt="food" />
                )}

                {index === current && (
                <h2 className='gallery_heading'>{slide.text}</h2>
                )}
            </div>  
            </>  
        )
    })}
        <ImArrowRight onClick={nextSlide}
        class='h-10 w-10 absolute top-1/2 right-8 m-0 text-lg text-white 
        z-10 cursor-pointer select-none border-2 border-white rounded bg-slate-500 opacity-50 
        hover:scale-110 hover:opacity-80' />
    </section>
  )
}

export default Slider