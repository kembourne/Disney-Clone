import React from 'react'
import Carosal from './Carosal'
import VideoPart from './VideoPart'
import Navbar from './Navbar'
import MovieDisplay from './MovieDisplay'
export default function Home() {
  return (
    <div>
   
      <Navbar /> 
     <Carosal />
      <VideoPart />
      <MovieDisplay />

    </div>
  )
}
