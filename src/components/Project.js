import React from 'react'
import '../styles/Project.css'


export const Project = (props)=>{
    return (

        <div className = "project pt-5" id = "project-sec">
            <div className="container-fluid">
            <div className="section-title">
                    <h2>Projects</h2>
                </div>

            <div className="main-branch">
                <div className="sub-branch">
                    <div id ="sub-project">
                            <img className = "nao img-fluid" src="sumya/assests/robot.png"></img>
                     </div>
                </div>
                <div className="sub-branch">

                    <div id ="sub-project1">
                            <img className = "voting img-fluid" src="sumya/assests/voting.png"></img>
                   </div>
                </div>

                <div className="sub-branch">

                    <div id ="sub-project2">
                            <img className = "cobra img-fluid" src="sumya/assests/voting.png"></img>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )

}