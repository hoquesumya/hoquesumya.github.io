import React from 'react'
import '../styles/Footer.css'

export const Footer = () =>{

  return(

    <div className = "footer">
      
       <div id = "footer_des">
          
          Built and Designed by Sumya

      </div>

     <div id = "link">

       <button id = "links">

          <img src = "./assests/Octocat.png" alt = "Github" />

       </button>
  
      <button id = "links">
         <img src = "./assests/linkdln.png" alt = "Linkdln"  />

      </button>
    

     </div>
   
    </div>

  )


}
