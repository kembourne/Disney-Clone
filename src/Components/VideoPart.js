import React from 'react'
import content from './trick'
import { useState } from 'react'
import { useId } from 'react'
import VideoCard from './VideoCard'
import './componentcss.css'
import viewersDisney from '../images/viewers-disney.png'
import viewersmarvel from '../images/viewers-marvel.png'
import viewersPixar from '../images/viewers-pixar.png'
import viewersNational from '../images/viewers-national.png'
import viewersstarwars from '../images/viewers-starwars.png'
import disneyvideo from '../videos/1564674844-disney.mp4'
import disneyvideo2 from '../videos/1564676115-marvel.mp4'
import disneyvideo3 from '../videos/1564676296-national-geographic.mp4'
import disneyvideo4 from '../videos/1564676714-pixar.mp4'
import disneyvideo5 from '../videos/1608229455-star-wars.mp4'
export default function VideoPart() {
    
    const content=[
        {
            image:viewersDisney,
            
            video:disneyvideo
        },
        {
            image:viewersmarvel,
            video:disneyvideo2
        }
        ,{image:viewersNational,
        video:disneyvideo3},
        {
            image:viewersPixar,
            video:disneyvideo4
        }
        ,{
            image:viewersstarwars,
            video:disneyvideo5
        }
    ]
   
const id=useId();
    return (
        <>
        <div className="videocardmain">
        {
            content.map((elem)=>{
                return <VideoCard image={elem.image} video={elem.video}/>
            })
        }
        </div>
        </>
    )
}
