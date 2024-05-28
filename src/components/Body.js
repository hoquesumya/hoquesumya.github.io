import React from 'react'
import {Introduction} from './Intro'
import '../styles/Body.css'
import {About} from './About'

import Sparkle from 'react-sparkle'
export const BodyElement = () => {

 return(
  <div className = "main">
   
    <Introduction />
   
  
    <Sparkle 
    color={'#FFF'}
    count={1000}
    minSize={2}
    maxSize={5}
    overflowPx={1}
    fadeOutSpeed={100}
    newSparkleOnFadeOut={true}
    flicker={true}
    flickerSpeed={'normal'}
    top={-20}
    />


    
    <About image = "./assests/Sumya.jpeg" />     
    </div>  

 );


}
