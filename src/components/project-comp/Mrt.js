import {React} from 'react'
import '../../styles/All_project.css'
import { Car } from './Carosuel'
import { useNavigate } from 'react-router-dom'
export const MRT = () =>{
    const navigate = useNavigate()
    let des = [{
        "type":"Category",
        "element":"Computer Networking Protocol, Socket Programming, TCP/UDP protocol"},
        {
        "type":"Technologies",
        "element":"Socket API, C++, make"
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
            <div className='row mrt_des pt-2 ps-4'>
                <div className='col-lg-8 pt-5 image_list'>
                     <h2></h2>
                        <Car type ="mrt"></Car>
                                
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
                                                <strong>{item["type"]}</strong>: <a href='https://github.com/hoquesumya/MRT'>{item["element"]}</a>
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
                                    The goal of this project is to develop a mini reliable transfer protocol on top of UDP. 
                                    </li>
                                    <li>
                                    This transport layer supports protection against segment losses via segment retransmissions
                                    </li>
                                    <li>
                                    Supports protection against data corruption via checksums, out-of-order delivery of segments on the UDP layer, fast transmission if the latency is high, transmission of small or large amounts of data , flow control (to avoid overflowing receiver buffer)
                                    </li>
                                </ul>
                        
                            </div>
        
                            </div>
        
                        </div>
                    </div>
       </div>

    )

}