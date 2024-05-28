import React from 'react'
import '../styles/About.css'
import {Container,ProgressBar } from 'react-bootstrap'

export const About = (props) => {

const tech_list = ["C/C++","Python","Java","React.js","Html & CSS"];

  return(
    
    <div className = "about" id = "about-section">
   
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

        <Container className='skills'>
                        <div className='section-title'>
                        <h2 style= {{ 
                           fontSize: '80%', 
                           fontWeight: 'bold',
                           background: 'linear-gradient(90deg, #000000, #FF69B4)', 
                           WebkitBackgroundClip: 'text', color: 'transparent' }}>
                           Programming Language
         
                        </h2>

                        </div>
                        <div className='row skills-content'>
                              <div className='col-lg-6'>
                              <div className="progress">
                                 <span className='skill'>
                                    Python 
                                    <i className='val'>80%</i>
                                 </span>
                                 <div className='progress-bar-wrap'>
                                 <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: '80%' }}
                                    aria-valuenow={80}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                 ></div>

                                 </div>   
                                 </div>

                            
                                 


                              </div>
                              

                        </div>
                     </Container>


      </div>
 






  )




}
