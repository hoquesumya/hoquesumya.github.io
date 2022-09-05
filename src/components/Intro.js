import React from 'react'
import '../styles/Intro.css'
import Typewriter from 'typewriter-effect'
import {FadeIn} from './FedInSec'
export const Introduction = () =>{
 
  
  return(
  
     <div id = "introduction">  
     
      <section> 
       <div id = "intro-name">
         <Typewriter
          
          onInit = { (typewriter) =>{
             typewriter
                
                .typeString(' <h3>Hi, </h3>')
                 .typeString(
                    ' <br><span class = type1">I am <span class = "name"> <span id ="toogle" >S</span><span id="toogle">u</span><span id= "toogle">m</span><span id = "toogle">y</span><span id ="toogle">a</span></span>.</span>' 
                 )
              .start()

      }}i
     />
    </div>
  <FadeIn>
     <div id = "intro-description">
        Aspiring software enigneer 
      </div>
    </FadeIn>
     <div id ="scroll-down">
      <span>scroll down</span>
   </div>
   
  
  <div id = "email">
    <a href = "mailto:sumyahoque2012@gmail.com">
     <button className= "Email">
        Contact me
     </button>
   </a>
   
   </div>

      </section>
   </div>

   
  )




}
