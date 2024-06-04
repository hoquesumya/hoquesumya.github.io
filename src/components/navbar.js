
import React, {useState,useEffect,useRef} from 'react'
import '../styles/navbar.css'
/*import CloseIcon from '@mui/icons-material/Close';*/

export default function Navbar ({setActiveState}){
 
const queries = {
 sm: '(min-width: 1000px)',
}


const mediaMatch = window.matchMedia(queries.sm);

const [match,setMatch]= useState(mediaMatch.matches);
const [actiVate, setActiVate] = useState(false);
const currentState = useRef(false);

useEffect(()=>{
       mediaMatch.addEventListener('change',e => setMatch(e.match) );
      
       
        
  return() =>{
    
      mediaMatch.removeEventListener('change',e=>setMatch(e.match));
// 
     }
 

},[mediaMatch]);

const handleClick =() =>{

 setActiVate(!actiVate);
 currentState.current = !actiVate;

}
  
const resources = ["About", "Experience", "Projects"];
const [refresh, setRefresh] = useState(false);

  
const links = [
   "#about-section" , 
   "#experience-section" ,
   "#project_sec"

    ]
   const handleRefresh = () =>{
        setRefresh(true);
        setActiveState("Home")
        window.location.reload();

    }
   return(
   
     <div className="nav-bar">
       
       <div id= "left-section">
        
         
           <button id = "text" onClick = {handleRefresh}> SH </button>
             
       </div>
     
        <div id ="right-section" ref = {currentState}>

        {match   &&  (<ul id="resource">

               
                {resources.map((item,index) =>(
                    
                    <a className = "nav-link" href = {links[index]}  key = {index}>
                
                   <li key ={index} onClick={() => setActiveState(item)}>
                       {item}
                  </li>
             </a>

             ))}
           
            </ul>
 )}
       
       {( !match && !actiVate) &&(<img id ="hamburger" src = "./assests/Hamburger.png" alt="menu" onClick = {handleClick}/>)}
              
    {(!match && actiVate) && (<img id = "close_menu" src = "./assests/close.png" alt = "close" onClick = {handleClick} />)}

       {(!match && actiVate) && (

           
        <div id ="Show_list"> 

          <ul id = "resource1">
               {resources.map((item,index) =>(
                
                        <button  onClick={() => setActiveState(item)}>              
                            <li key ={index}>
                                {item}
                            </li>
                        </button>
                  
 

               ))}

         </ul>
        </div>
        
         )}
       

        </div>

  
      
  

     </div>

  

 )



}
