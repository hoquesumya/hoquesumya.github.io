
import React from 'react'
import '../styles/sidebar.css'
export default function SideBar({imgSrc, url}) {


const toolTipName = {
  
  github  : "Github",
  linkdln : "Linkdln"

}


 return(

    <div className = "side-bar">

       { imgSrc.map((item,index) =>(

           <div id="side-link" key = {index}>

            <a href = {url[index]} target = "_blank" rel = "noreferrer"> 

             <button id ="side_image" >
                <img src ={item} alt="side profile"/>

                <div id="tooltip"> 
              
              {item ==="./assests/Octocat.png" ? (

                  <>
                    {toolTipName.github}
                  </>

               ) :(

                   <>
                     {toolTipName.linkdln}
                    </>
                 )}
                    
              </div>


              </button>

            </a>
              
                         
          </div>

        ))}


    </div>



 );

/*const handleClick = () =>{

  window.open("https://www.linkedin.com/in/sumyahoque/");  


}
return(

  <div className ="side-bar">

     <div id="side-link">
     
      
        <button id="side_image" onClick = {handleClick}>
          <img src = "./assests/Octocat.png" alt ="Github" />
        
        <div id="tooltip">
          Github
        
        </div>
      </button>

     </div>

     <div id="side-link">

        <button id="side_image">
          <img src = "./assests/linkdln.png" alt ="Linkdln" />
        
        <div id="tooltip">
          Linkdln
        
        </div>
       </button>

     </div>

  </div>

);*/




}
