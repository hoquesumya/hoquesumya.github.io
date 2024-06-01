import React from 'react'
import '../styles/Experience.css'


export const Experience = (props) =>{



    let className = "experience pt-5"

    if (props.activeState==="Experience") {
        className = "experience_temp"
     
     }

    let under_grad_researcher = [
        "Conducted in-depth research on designing and developing a microservice architecture to emulate Google microservice workloads",
        "Customized existing open-source microservices by creating a Python-based, DAG-style automated workflow that mirrors Google's microservice architecture and executes services parallel or sequentially.",
        "Deployed the workflow in a production-grade Kubernetes cluster and performed benchmarking by generating HTTP requests directed to the NGINX access gateway to assess application performance.",
        "Utilized distributed tracing tools like Jaeger to monitor and analyze the performance of the microservices."
    ]
    let acedemic_research = ['Designed a humanoid assistive robot (NAO) in Choregraphe that can provide mental health assistance to nursing home elderlies with techniques of exercises based on validating some pre-assessments',
    "Programmed Amazon Alexa virtual assistant in Node.js to deliver Cognitive Behavioral Therapy Assistance to nursing home elderlies",
    "Built Node js  REST API using Mongoose to allow Amazon Alexa to communicate with MongoDB database server to save the users’ mental health pre-assessment information in a secure way"
    ]

    let all_experience = [{
                            "role_name":'Undergraduate Researcher',
                            "comp-name":"Columbia University",
                            "date": "08/2023-Present",
                            "duty": under_grad_researcher

                          },
    
                         {
                            "role_name":'Academic Research Assistant',
                            "comp-name":"CUNY Research Scholar",
                            "date": "08/2020-05/2021",
                            "duty": acedemic_research
                         }
                        
                        ]

    let median = all_experience.length /2




    return(

        <div className = {className} id ="experience-section">
            <div className="container-fluid">
                <div className="section-title">
                    <h2>Experience</h2>
                </div>
                <div className = "row">
                    <div className="col-lg-6">

                        {
                            all_experience.map((exp,index)=>{
                                if (index < median){
                                    return (

                                    <div className = "experience-item pt-3">
                                        <h4 className="pt-3">{exp['role_name']}</h4>
                                        <h6>{exp['date']}</h6>
                                        <p><em>{exp['comp-nmae']}</em></p>
                                        <p> </p>
                                        <ul className="list"> 
                                            {exp['duty'].map((item)=>(
                                                 <li className='p-2'>{item}</li>
            
                                            ))}
            
                                        </ul>
                                    </div>


                                    )
                                }
                                return null

                            })
                        }
                    </div>

                    <div className="col-lg-6">
                    {
                            all_experience.map((exp,index)=>{
                                if (index >= median){
                                    return (

                                    <div className = "experience-item pt-3">
                                        <h4 className="pt-3">{exp['role_name']}</h4>
                                        <h6>{exp['date']}</h6>
                                        <p><em>{exp['comp-nmae']}</em></p>
                                        <p> </p>
                                        <ul className="list"> 
                                            {exp['duty'].map((item)=>(
                                                 <li className='p-2'>{item}</li>
            
                                            ))}
            
                                        </ul>
                                    </div>


                                    )
                                }
                                return null

                            })
                        }
                      
                    </div>
                </div>
            </div>

        </div>
    )
}