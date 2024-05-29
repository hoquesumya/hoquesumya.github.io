import React from 'react'
import '../styles/About.css'
import {Container } from 'react-bootstrap'
import { Skill } from './SkillComponent'

import Sparkle from 'react-sparkle'

export const About = (props) => {

const tech_list_percent = ["80","75","30","50","90","70","50", "50"];
const tech_list = ["C/C++","Python","Java","Javascript","SQL","Html","CSS", "OCAML"];
const frames_list=["Flask", 'React', "Bootstrap"]
const tool_and_Techs=["Git", "Unix", "GCP", "PostGresSQL", "Postman", "Latex"]
const tool_and_Techs_parcent =["80","90","30","90","50","60"]
const types_of_skills = ["Programming Language","Tools And Techs","Frameworks"]

let className = "about pt-2"

if (props.activeState==="About") {
   className = "about_temp"

}

  return(
    
    <div className = {className} id = "about-section">
   
            <h1>About Me </h1>
          
          <div className = "main_about">
         
             <div id = "about_des">
                <p> I am currently a third-year Computer Science student at Columbia University. I graduted from City University of New York with A.S in Computer Science.<br/> Besides of studying, I love to read books and explore new placesand cook new foods in my free times. I am also fond of working out, lifting weights. </p>
                    <p> Here is a few technologies I have been working with: </p> 

             </div>
             
             <div id = "my_image" >
                <img id ="image" src = {props.image} alt = "Sumya Image"/>
             </div>

        </div>
       
        {types_of_skills.map((skill,index) => (<Container className='skills pt-5 pe-5'>
                        
                        <div className='section-title'>
                           <h2 style= {{ 
                              fontSize: '80%', 
                              fontWeight: 'bold',
                              background: 'linear-gradient(90deg, #000000, #FF69B4)', 
                              WebkitBackgroundClip: 'text', color: 'transparent' }}>
                              {skill}
            
                           </h2>

                        </div>

                        {skill === "Programming Language" && (
                           <Skill ind = {index} list_percent={tech_list_percent} list={tech_list}></Skill>
                        )}

                        {skill === "Tools And Techs" && (
                           <Skill ind = {index} list_percent={tool_and_Techs_parcent} list={tool_and_Techs}></Skill>
                        )}

                        {skill === "Frameworks" && (
                           <Skill ind = {index} list_percent={tool_and_Techs_parcent} list={tool_and_Techs}></Skill>
                        )}
                                                      
                     </Container>
         ))}


      </div>
 



  )}
