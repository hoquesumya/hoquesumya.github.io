import React , {useState,useEffect, useRef} from 'react'

export const FadeIn = (props)=>{

   const currentDOM = useRef();//useRef works like useState, but withour re-rendering most common-case is to refer an elememtn inside our html document useRef has directer access to our DOM//
 
  const [isVisible,setVisible] = useState(false);

  useEffect(()=>{
  const observer = new IntersectionObserver(entries =>{
      
     entries.forEach (entry =>{
       if(entry.isIntersecting){
         setVisible(entry.isIntersecting);
      }

     });

   });

  observer.observe(currentDOM.current);
  console.log(isVisible);
  
  return()=>{observer.unobserve(currentDOM.current)}

},[]);

  return (

    <div className = {`fade-in-section ${isVisible ? "is-visible" :""}`}
    style = {{tansitionDelay: `${props.delay}`}}
    ref = {currentDOM}
    >
     {props.children}


   </div>
   );


  }

