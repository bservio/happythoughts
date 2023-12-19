import React, {useEffect, useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export default function Carousel({ 
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,

 }) {
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if(!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  })
  
  return (
    <div className='overflow-hidden relative'>
      <div className='flex transition-transform ease-out duration-500' style={{transform: `translateX(-${curr*100}%)`}}>{slides}</div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button>
          <BsChevronCompactLeft className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' onClick={prev} size={40} />
        </button>
        <button>
          <BsChevronCompactRight className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' onClick={next} size={40} />
        </button>
      </div>
      <div className="absoulte bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2 z-50">
          {slides.map((_, slideIndex) => (
            <div 
              className={`transition-all w-3 h-3 bg-white rounded-full ${curr === slideIndex ? "p-2" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
