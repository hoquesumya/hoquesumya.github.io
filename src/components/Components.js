import React, {useState, useEffect,useRef} from 'react'
//import NavBar from './navbar'
import SideBar from './sidebar'
//import {Introduction} from './Intro'
import {BodyElement} from './Body'
import {Footer} from './Footer'
import Sparkle from 'react-sparkle'


/*to view image from local host we need to use ./sumya/assests/Octocat.png because we created a directory named sumya while publishing the website to Github*/
export const Components = () =>{

   const imgSrc = ["./assests/Octocat.png" , "./assests/linkdln.png"];
   const url = ["https://github.com/hoquesumya", "https://www.linkedin.com/in/sumyahoque/"];

  return (

  <div className = "components">


  
<Sparkle 
    color={'#FFF'}
    count={100}
    minSize={2}
    maxSize={5}
    overflowPx={1}
    fadeOutSpeed={100}
    newSparkleOnFadeOut={true}
    flicker={true}
    flickerSpeed={'normal'}
    top={-20}
    />

  <SideBar imgSrc = {imgSrc} url = {url}/>
  <BodyElement />  
  <Footer />
  </div>


  );


}

