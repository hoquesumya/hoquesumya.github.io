import React from 'react'
import { useState } from 'react';
import '../styles/Intro.css'
import Typewriter from 'typewriter-effect'
import Sparkle from 'react-sparkle'
export const Introduction = () =>{
   const [nameTyped, setNameTyped] = useState(false);
   const [introTyped, setIntroTyped] = useState(false);
   const [rose, setRose] = useState(false);
   const code = `#include <stdio.h>`;
  
  return(
  
     <div id = "introduction"> 
         <div id = "intro-name">
            <div style={{ margin: "none", lineHeight: "5rem" }}>
               <span id="intro">Hi, I am </span>
               <span className="name">
               <span className = "name-i" id="toggle">S</span>
               <span id="toggle">u</span>
               <span id="toggle">m</span>
               <span id="toggle">y</span>
               <span id="toggle">a</span>
               </span>
            </div>
         </div>
         <div id = "intro-description">
            <p>I am an aspiring Software Engineer based in NYC, passionate about building and learning about large-scale software products.</p>
         </div>
      

      
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


   </div>

   
  )

}
