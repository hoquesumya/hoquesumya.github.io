
import React, {useState,useEffect,useRef} from 'react'
import '../styles/navbar.css'
/*import CloseIcon from '@mui/icons-material/Close';*/

export default function Navbar (){
 
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
   "https://github.com/hoquesumya" ,
    "./assests/Sumya_Resume_August.docx.pdf" 

    ]
   const handleRefresh = () =>{
        setRefresh(true);
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
                    
                    <a href = {links[index]}  key = {index}>
                
                   <li key ={index}>
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
                
                     <a href = {links[index]}  key = {index}> 
                     <button>              
                   <li key ={index}>
                       {item}
                  </li>
                  </button>
                   </a>
 

               ))}

         </ul>
        </div>
        
         )}
       

        </div>

  
      
  

     </div>

  

 )



}
