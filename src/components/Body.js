import {React,useState} from 'react'
import {Introduction} from './Intro'
import '../styles/Body.css'
import {About} from './About'
import { Experience  } from './Experience'
import { Project } from './Project'

import Sparkle from 'react-sparkle'
export const BodyElement = ({activeSection}) => {
  //const [activeSection, setActiveSection] = useState("Home")


 return(
  <div className = "main container-fluid d-flex flex-column pe-2">
 
    {activeSection ==="Home" && ( 
      <>
      <Introduction />
    
      <Sparkle 
        color={'#DA70D6'}
        count={1000}
        minSize={2}
        maxSize={5}
        overflowPx={1}
        fadeOutSpeed={100}
        newSparkleOnFadeOut={true}
        flicker={true}
        flickerSpeed={'normal'}
      />


      
      <About image = "sumya/assests/Sumya.jpeg" activeState={activeSection}/>   

      <Experience activeState={activeSection}> </Experience>  
      <Project activeSection={activeSection}></Project>
      </> 
    )} 

{activeSection ==="About" && ( 
      <>
    
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
      
      <About image = "sumya/assests/Sumya.jpeg" activeState={activeSection}/> 

      </> 
    )} 

{activeSection ==="Experience" && ( 
      <>
    
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
      
      <Experience  activeState={activeSection}/>   
      </> 
    )} 
   
    </div>  


    

 );


}
