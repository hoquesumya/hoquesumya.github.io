import React from 'react'
import { useState } from 'react';
import '../styles/Intro.css'
import Typewriter from 'typewriter-effect'
import Sparkle from 'react-sparkle'
export const Introduction = () =>{
   const [nameTyped, setNameTyped] = useState(false);
   const [introTyped, setIntroTyped] = useState(false);
   const [rose, setRose] = useState(false);
  
  return(
  
     <div id = "introduction"> 
 
      <section> 
         <div id = "intro-name">
            
            <Typewriter
                  
               onInit = { (typewriter) =>{
                  typewriter
                        
                        .typeString(' <h3 style="font-size:50%;">Hi, </h3>')
                        .typeString(
                           ' <br><span class = type1">I am <span class = "name"> <span id ="toogle" >S</span><span id="toogle">u</span><span id= "toogle">m</span><span id = "toogle">y</span><span id ="toogle">a</span></span>.</span>' 
                        )
                        .callFunction(() => {
                           setNameTyped(true);
                         })
                        .start()

               }}
            />
            {rose && (<div id = "rose">
               <img id="roseT" src='sumya/assests/roseT.png'></img>

         <Sparkle 
    color={'#ebf054'}
    count={500}
    minSize={2}
    maxSize={5}
    overflowPx={50}
    fadeOutSpeed={50}
    newSparkleOnFadeOut={true}
    flicker={true}
    flickerSpeed={'normal'}
    />


            </div>)}
         </div>
         {nameTyped && (<div id = "intro-description">
            <Typewriter
               options={{
                  cursor: '' // Hide the cursor
               }}
                  onInit = { (typewriter) =>{
                     typewriter
                           .typeString(
                              'Aspiring Software Enigneer' 
                           )
                           .callFunction(() => {
                              setIntroTyped(true);
                            })
                           .start()

                  }}
            />
         </div>
         )}

      
     <div id ="scroll-down">
      <span>scroll down</span>
   </div>
   
  
  {introTyped && (<div id = "email">
    <a href = "mailto:sumyahoque2012@gmail.com">
     <button className= "Email">

     <Typewriter
               options={{
                  cursor: '' // Hide the cursor
               }}
                  onInit = { (typewriter) =>{
                     typewriter
                           .typeString(
                              'Contact me' 
                           )
                           .callFunction(() => {
                              setRose(true);
                            })
                           .start()

                  }}
            />
     </button>
   </a>
   
   </div>
  )}

      </section>
   </div>

   
  )

}
