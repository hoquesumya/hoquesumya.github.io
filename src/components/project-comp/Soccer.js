import {React} from 'react'
import '../../styles/All_project.css'
import { Car } from './Carosuel'
import { useNavigate } from 'react-router-dom'


export const Soccer= () =>{
    const navigate = useNavigate()

    let des = [{
        "type":"Category",
        "element":"Database, Web App"},
        {
        "type":"Technologies",
        "element":"Python, SQL, Javascript"},
        {
            "type":"Project Date",
            "element":"December 2023"
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
                        <h2>Soccer</h2>
                        <Car type ="soccer"></Car>
                        
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
                                        <strong>{item["type"]}</strong>: <a href='https://github.com/hoquesumya/cs4111-soccer/tree/sumya'>{item["element"]}</a>
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
                        ● Designed and implemented a dynamic website using Python Flask, JavaScript, and PostgreSQL database, providing users
seamless access to soccer-related information.
                        ● Developed a user-friendly interface using HTML, and CSS for retrieving comprehensive soccer-related details, enhancing
                        the overall user experience
                        ● Deployed the website on Google Cloud, leveraging cloud infrastructure for scalability, reliability, and efficient
                        performance
                        </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}