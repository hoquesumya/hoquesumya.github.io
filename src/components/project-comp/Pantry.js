import {React} from 'react'
import '../../styles/All_project.css'
import { Car } from './Carosuel'
import { useNavigate } from 'react-router-dom'


export const Pantry= () =>{
    const navigate = useNavigate()

    let des = [{
        "type":"Category",
        "element":"File System, Linux Kernel"},
        {
        "type":"Technologies",
        "element":"C, Kernel API"},
        {
            "type":"Project Date",
            "element":"May 2023"
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
                        <h2>My Pantry</h2>
                        <Car type ="file_system"></Car>
                        
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
                                        <strong>{item["type"]}</strong>: <a href='https://gist.github.com/hoquesumya/6bad5b2174d7c25d868891922a4c0aa9'>{item["element"]}</a>
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
                        ● Built and designed a custom Linux filesystem called Pantry that works over Linux VFS filesystem using C and Kernel API <br></br>
● Implemented core functionalities, such as mounting unmounting disk, reading from superblock and inodes <br></br>
● Implemented functionalities for listing and looking up directories, reading from and writing to a file, creating and
deleting new files, making and removing directories, and creating hard and symlinks<br></br>
● Improved the implementation to provide accurate metadata for all files and directories by 5%.<br></br>
                       
                        </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}