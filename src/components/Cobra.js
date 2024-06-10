import {React} from 'react'
import '../styles/All_project.css'
import { Car } from './Carosuel'
import { useNavigate } from 'react-router-dom'


export const Cobra= () =>{
    const navigate = useNavigate()

    let des = [{
        "type":"Category",
        "element":"Compiler, LLVM, Programiing Language"},
        {
        "type":"Technologies",
        "element":"OCaml, LLVM"},
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
                        <Car type ="cobra"></Car>
                        
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
                                        <strong>{item["type"]}</strong>: <a href='https://github.com/hoquesumya/Cobra'>{item["element"]}</a>
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
                            Designed and developed a compiler for a programming language named "Cobra" using OCaml and LLVM. The language is buit 
                            in the ispiration of Python and C syntax and structure such that we can build a programming 
                            langugage that can be used in Embedded system.  
                        </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}