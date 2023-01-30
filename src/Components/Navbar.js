import React from 'react'
import logo from '../images/logo.svg'
import componentcss from './componentcss.css'
import homeicon from '../images/home-icon.svg'
import { Link } from 'react-router-dom'
import seriesicon from '../images/series-icon.svg'
import watchlisticon from '../images/watchlist-icon.svg'
import searchicon from '../images/search-icon.svg'

export default function Navbar() {
  return (   <>
    <div  className='navmain'>
      <img className='navimg ' src={logo} alt="none" />
   <div className="navitems">
<Link to="Home" className='navitem'>
  <img src={homeicon} alt="" className='homeicon' />
<h3  className='navitem2'>Home</h3>
</Link>
<Link to="WatchList" className='navitem'>
  <img src={watchlisticon} alt="" className='homeicon' />
<h3 className='navitem2'>Watch List</h3>
</Link>
<Link to="Series" className='navitem'>
  <img src={seriesicon} alt="" className='homeicon' />
<h3 className='navitem2'>Series</h3>
</Link>
<Link to="Search" className='navitem'>
  <img src={searchicon} alt="" className='homeicon' />
<h3 className='navitem2'>Search</h3>
</Link>
   </div>
    </div>
</>
  )
}

