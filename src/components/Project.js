import {React,useState} from 'react'
import '../styles/Project.css'
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export const Project = (props)=>{

    let className = "project pt-5"

    if (props.activeState==="Projects") {
        className = "project_temp"
     
     }

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate()


    let list_of_project = [{
        "image_name":"nao",
        "image_src":"assests/nao.png",
        "tools":"Choreographe, Java, Node.js, MongoDB, Alexa",
        "title": "Mental Health Assistant",
        "text":"This project aims for proving therapy assistant to nursing home residents",
        "color":"linear-gradient(to top right, #9960e4, #ed5393)",
        "bottomColor":"linear-gradient(to top right, #9960e4, #ed5393)",
    },
    {
        "image_name":"voting_ledger" ,
        "image_src":"assests/EVFB.png",
        "tools":"Python, Jquery, Blockchain",
         "title": "Escape Velocity for Democracy",
         "text": "This project is  creating a distributed voting ledger using blockchain algorithm",
         "color":"#20a7db",
         "bottomColor":"#20a7db"
    },

    {
        "image_name":"cobra",
        "image_src":"assests/cobra.png",
        "tools":"OCaml, LLVM",
         "title": "Cobra",
         "color":"linear-gradient(to right,#606c88,#3f4c6b",
         "text": "A compiler for a programming language named Cobrausing OCaml and LLVM"
    },
    
    {
        "image_name":"my_pantry",
        "image_src":"assests/pantry.png",
        "tools":"C, Kernel API",
        "title": "My Pantry",
        "color": "linear-gradient(115deg, #fdfcfb, #e2d1c3)",
        "bottomColor" :"#a07361",
        "text": ""
    },

    {
        "image_name":"mrt",
        "image_src":"assests/mrt.png",
        "tools":"C++, Socket IO, Multithreading",
        "title": "Mini Reliable transfer Protocol",
        "color": "linear-gradient(115deg, #fdfcfb, #e2d1c3)",
        "bottomColor" :"#B8E2F2",
        "text": ""

    },

    {
        "image_name":"studyLink",
        "image_src":"assests/studygroup.png",
        "tools":"React, Python,  MYSQL, GCP, AWS",
        "title": "StudyLink",
        "color": "linear-gradient(115deg, #fdfcfb, #e2d1c3)",
        "bottomColor" :"#FCD12A",
        "text": ""

    }


    ]
    
    const handleMouseEnter = (index)=>{
        setHoveredIndex(index)

    }

    const handleMouseLeave = () =>{
        setHoveredIndex(null)
    }

    const handleClick = (project)=>{
        console.log(project)
        navigate(`/${project}`);

    }


    return (
        <div className = {className } id = "project-section">
           
            <div className="section-title">
                    <h2>Projects</h2>
                </div>

            <div className="row project-main" >
            {list_of_project.map((item, index) => {
                    return (
                        <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                            <Card
                                style={{
                                    height: "100%",
                                    backgroundImage: item["color"],
                                }}
                                className="card-main"
                                >
                                 <Card.Img variant="top" src={item["image_src"]} 
                                 className={`${item["image_name"]}`}
                                 
                                 />
                                 <Card.Body style = {{backgroundColor:item["bottomColor"], color:"black",  "zIndex":"1000"}}> 
                                    <Card.Title style = {{fontWeight:"600"}}>{item["title"]}</Card.Title>
                                    <button type="button"
                                        className="btn btn-md" 
                                        style={{"backgroundColor":"#de9bb7"}}
                                        onClick={()=>handleClick(item["image_name"])}
                                        
                                        >
                                            View
                                        </button>
                                    
                                 </Card.Body>
                                
                            </Card>
                        </div>
                 );
            })}
            </div>
        </div>
    )

}