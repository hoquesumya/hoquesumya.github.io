import {React} from 'react'
import '../../styles/All_project.css'
import { Car } from './Carosuel'
import { useNavigate } from 'react-router-dom'
export const StudyLink = () =>{
    const navigate = useNavigate()
    let des = [{
        "type":"Category",
        "element":"Microservice, Full Stack"},
        {
        "type":"Technologies",
        "element":"Pythonn, React, AWS, GCP, Docker, MySQL, CI/CD"
        },
        {
            "type":"Project Date",
            "element":"December 2024"
        },
        {
            "type":"url",
            "element":"Github"
        }

    ]
    return(
        <div className = "all_Project">
            <nav className="navbar navbar-light bg-transparent">
            <div className="container-fluid">
                <button type="button" 
                    className="btn-close ms-auto pe-5" 
                    aria-label="Close"
                    onClick={() => navigate(-1)}>
                </button>
            </div>
        </nav>
          <div className='container'>
            <div className='row studyLink_des pt-2 ps-4'>
                <div className='col-lg-8 pt-5 image_list'>
                     <h2></h2>
                        <Car type ="studyLink"></Car>
                                
                </div>
                 <div className='col-lg-4 pt-5 project_details'>
                        <h3>Project Details</h3>
                        <div className='d-flex flex-column'>
                            <ul className='list-group pt-2'>
                                {
                                    des.map((item, index) => {
                                        if (item["element"] === "Github") {
                                            return (
                                            <li className='list-group-item bg-transparent border-0 p-0' key={index}>
                                                <strong>{item["type"]}</strong>: <a href='https://github.com/hoquesumya/StudyLink'>{item["element"]}</a>
                                            </li>
                                            );
                                        } else {
                                            return (
                                            <li className='list-group-item bg-transparent border-0 ps-0' key={index}>
                                                <strong>{item["type"]}</strong>: {item["element"]}
                                            </li>
                                            );
                                        }
                                    })
                                }
                            </ul>

     
                                <ul  style={{"listStyleType": "square"}}>
                                    <li>
                                    The goal of this project is to develop a scalable full-stack web application that helps Columbia University students create study groups. The frontend is built with React and Redux, while the backend is powered by Python's FastAPI. The application follows a microservices architecture, with five distinct microservices, each storing its state in its own database. 
                                    </li>
                                    <li>
                                    The services are deployed across Google Cloud Platform (GCP), AWS VM, Docker, and Google Platform as a Service (PaaS). To ensure security, the app uses JWT (JSON Web Tokens) alongside Google OAuth 2.0 for authentication. Additionally, an API Gateway is used to manage and route communication between the different microservices, providing a unified entry point for all requests. The API Gateway also handles authentication and authorization (e.g., verifying JWT tokens or Google OAuth), ensuring that each individual microservice does not need to manage security separately.
                                    </li>
                                    <li>
                                    Continuous Integration and Continuous Deployment (CI/CD) pipelines have been implemented to automate the process of code integration, testing, and deployment, ensuring faster and more reliable releases.
                                    </li>
                                </ul>
                        
                            </div>
        
                            </div>
        
                        </div>
                    </div>
       </div>

    )

}