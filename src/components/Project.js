import {React,useState} from 'react'
import '../styles/Project.css'
import { useNavigate } from 'react-router-dom';


export const Project = (props)=>{

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate()


    let list_of_project = [{
        "image_name":"nao",
        "image_src":"assests/robot.png",
        "tools":"Choreographe, Java, Node.js, MongoDB, Alexa"
    },
    {
        "image_name":"voting_ledger" ,
        "image_src":"assests/voting.png",
        "tools":"Python, Jquery, Blockchain"
    },

    {
        "image_name":"cobra",
        "image_src":"assests/cobra.jpeg",
        "tools":"OCaml, LLVM"
    },

    {
        "image_name":"soccer_info",
        "image_src":"assests/soccer.png",
        "tools":"Python, JavaScript, Google Cloud, SQL"
    },


    {
        "image_name":"my_pantry",
        "image_src":"assests/mypantry.png",
        "tools":"C, Kernel API"
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

        <div className = "project pt-5" id = "project-sec">
            <div className="container-fluid">
            <div className="section-title">
                    <h2>Projects</h2>
                </div>

            <div className="main-branch">
            {list_of_project.map((item, index) => {
                
                    return (
                        <div className="sub-branch" key={index}>
                            <div 
                            className={`sub-project${index}`} 
                            onMouseEnter={() => handleMouseEnter(index)} 
                            onMouseLeave ={handleMouseLeave}
                            >
                                <img className={`${item["image_name"]} img-fluid`}
                                 src={item["image_src"]}
                                  alt={`Project ${index}`}
                                   />
                                {hoveredIndex === index && (
                                <div className="button">
                                    
                                        <button type="button"
                                        
                                        className="btn btn-lg" 
                                        onClick={()=>handleClick(item["image_name"])}
                                        
                                        >
                                            View Details
                                        </button>
                                    
                                </div>
                                )}


                            </div>
                        </div>
                 );
            })}
            </div>
            </div>
        </div>
    )

}