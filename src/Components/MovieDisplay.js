import React from 'react'
import { data } from './moviedata'
import Recommend from './Recommend'
import New from './New.js'
import Trending from './Trending.js'
import Original from './Original.js'
import Grid from '@mui/material/Grid'; // Grid version 1
import Item from '@mui/material/Grid'; // Grid version 1
import './componentcss.css'
export default function MovieDisplay() {
  console.log(data)
  console.log(typeof (data))
  return (

  <div className="moviecardmain">

  
    <Grid className="moviecardmain" container spacing={{ xs: 2, md: 2 }} columns={{ xs: 5.7, sm: 8, md: 12 }} direction="row"
    justifyContent="center"
    alignItems="center" >
  {data.map((movie) => (
    <Grid item xs={2} sm={4} md={3} >
      <Item><Recommend movie={movie} /></Item>
    </Grid>
  ))}
</Grid>
</div>

  
  )
}

//  else if(movie.type==="new")
//   return <New data={movie} />
// else  if(movie.type==="recommend")
//   return <Recommend data={movie} />
//  else if(movie.type==="recommend")
//   return <Recommend data={movie} />