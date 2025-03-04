import {React} from 'react'
import '../../styles/All_project.css'
import { Car } from './Carosuel'
import { useNavigate } from 'react-router-dom'


export const Nao = () =>{
    const navigate = useNavigate()

    let des = [{
        "type":"Category",
        "element":"Robotics, Mobile App"},
        {
        "type":"Technologies",
        "element":"Choreographe, Java, Node.js, MongoDB, Alexa"
        },
        {
            "type":"Project Date",
            "element":"May 2021"
        },
        {
            "type":"url",
            "element":"Github"
        }

    ]
    return (
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
                <div className='row nao_des pt-2 ps-4'>
                    <div className='col-lg-8 pt-5 image_list'>
                        <h2>Mental Health Assistant</h2>
                        <Car type ="nao"></Car>
                        
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
                                        <strong>{item["type"]}</strong>: <a href='https://github.com/hoquesumya/COVID19_AI_MENTAL_HEALTH_APP_FRONTEND'>{item["element"]}</a>
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
                        <p className='pt-3 pb-5'>
                            The project is about desigining a humanoid assistive robot (NAO) in Choregraphe that can provide mental health assistance to nursing home elderlies with
                            techniques of exercises based on validating some pre-assessments. The project also focuses on desiging an android app that will deliver the mental health assitance by intigrating
                            IBM Watson Chatbot.
                        </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}