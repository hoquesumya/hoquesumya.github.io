import {React} from 'react'
import '../../styles/All_project.css'
import { Car } from './Carosuel'
import { useNavigate } from 'react-router-dom'


export const Voting = () =>{
    const navigate = useNavigate()

    let des = [{
        "type":"Category",
        "element":"Blockchain, Networking, Distributed system"},
        {
        "type":"Technologies",
        "element":"Python, Flask, Jquery"
        },
        {
            "type":"Project Date",
            "element":"May 2024"
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
                        <h2>Escape Velocity For Velocity</h2>
                        <Car type ="voting"></Car>
                        
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
                                        <strong>{item["type"]}</strong>: <a href='https://github.com/hoquesumya/Escape_velocity_Democracy'>{item["element"]}</a>
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
                        client application (used Flask) deals with retrieving the client's voting infomation. 
                        The voting information is sent to a available peer on the network where the peer will attempt to create a block and validate the block's itegrity and client's sent data. 
                        Based on the validity of the block, the block will be added to the blockchain and broadcast to the other peers that are connected to the network.
                         The available peer information is collected from a tracker which keeps track of the alive peers in the network. a peer communicates with a tracker in every 10s
                        </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}