import React from 'react'
import {Link} from 'react-router-dom'
export default function MovieCard(props) {
  console.log(props)
  const style={
    backgroundImage:`url(${props.movie.cardImg})`,
    backgroundPosition:"contain",
    backgroundSize:"cover"

  }
  return (
    <div className='recommendbox' style={style}>

    <Link >
  
  
    </Link>
    </div>
  )
}

