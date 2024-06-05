import React from 'react'
import '../styles/Project.css'
import { Button } from 'react-bootstrap'


export const Project = (props)=>{
    let list_of_project = [{
        "image_name":"Mental Health Assistant",
        "image_src":"sumya/assests/robot.png",
        "tools":"Choreographe, Java, Node.js, MongoDB, Alexa"
    },
    {
        "image_name":"Distributed voting ledger" ,
        "image_src":"sumya/assests/voting.png",
        "tools":"Python, Jquery, Blockchain"
    },

    {
        "image_name":"Cobra",
        "image_src":"sumya/assests/cobra.jpeg",
        "tools":"OCaml, LLVM"
    },

    {
        "image_name":"Soccer_info",
        "image_src":"sumya/assests/soccer.png",
        "tools":"Python, JavaScript, Google Cloud, SQL"
    },


    {
        "image_name":"My_pantry",
        "image_src":"sumya/assests/mypantry.png",
        "tools":"C, Kernel API"
    }


    ]

    let className = "button"
    const handleMouseEnter = ()=>{
        className = "button-temp"

    }

    const handleMouseLeave = () =>{
        className = "button"

    }
    return (

        <div className = "project pt-5" id = "project-sec">
            <div className="container-fluid">
            <div className="section-title">
                    <h2>Projects</h2>
                </div>

            <div className="main-branch">
            {list_of_project.map((item, index) => {
                
                    return (
                        <div className="sub-branch" key={index}>
                            <div className={`sub-project${index}`} onMouseEnter={handleMouseEnter} onMouseLeave ={handleMouseLeave}>
                                <img className={`${item["image_name"]} img-fluid`} src={item["image_src"]} alt={`Project ${index}`} />
                                <div className={className}>
                                    <button type="button" className="btn btn-lg" >View Details</button>
                                </div>


                            </div>
                        </div>
                 );
            })}
            </div>
            </div>
        </div>
    )

}