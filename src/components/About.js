import React from 'react'
import '../styles/About.css'
import {FadeIn} from './FedInSec'

export const About = (props) => {

const tech_list = ["C","C++","Python","Java","React.js","Html & CSS"];

  return(
    
    <div className = "about" id = "about-section">
         <FadeIn> 
            <h1>About Me </h1>
          
          <div className = "main_about">
                         
             <div id = "about_des">
                <p> I am currently a third-year Computer Science student at Columbia University. I graduted from City University of New York with A.S in Computer Science.<br/> Besides of studying, I love to read books and explore new placesand cook new foods in my free times. I am also fond of working out, lifting weights. </p>
                    <p> Here is a few technologies I have been working with: </p>


              <ul className = "technologies">
              {tech_list.map((item,index) =>(

             <FadeIn delay = {`$(i++1)00ms`}>
                <li key = {index}>
                    {item}
                </li>
            </FadeIn>
             ))}
            </ul>    
             </div>
             
             <div id = "my_image" >
                <img id ="image" src = {props.image} alt = "Sumya Image"/>
             </div>
        </div>

     </FadeIn>

      </div>
 






  )




}
