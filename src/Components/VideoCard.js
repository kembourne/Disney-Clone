import React from 'react'
import './componentcss.css'
export default function VideoCard(props) {
  
  return (
    <div className='videocard' >
      <img src={props.image} alt="" className="videoimage"/>
     <video muted src={props.video} autoPlay={true} loop={true} className='video' type="video/mp4" playsInline={true}></video>
    </div>
  )
}
