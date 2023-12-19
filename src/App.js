import React from 'react'
import Carousel from './components/Carousel'

const slides = [
  {
    url: "https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    url: "https://images.unsplash.com/photo-1682685797736-dabb341dc7de?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    url: "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    url: "https://images.unsplash.com/photo-1507090960745-b32f65d3113a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
]

export default function App() {
  return (
    <div className="max-w-[1400px] max-h-[600px] w-full m-auto py-16 px-4 relative group">
      <Carousel autoSlide>
        {slides.map ((s) => (
          <img src={s.url} alt='Image1'/>
        ))}
      </Carousel>

    </div>
  )
}
