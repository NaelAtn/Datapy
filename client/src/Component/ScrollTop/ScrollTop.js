import React, { useEffect, useState } from 'react'
import './ScrollTop.css'
import { FaArrowAltCircleUp } from 'react-icons/fa';

const ScrollTop = () => {

    const [backToTopButton,SetBackToTopButton] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>125){
                SetBackToTopButton(true)   
            }else{
                SetBackToTopButton(false)   
            }   
        })
    },[])

    const scrolUp =()=> {
        window.scrollTo({
            top : 0 ,
            behavior : "smooth" })
        }
  return (
    <div>
        {backToTopButton && (
            <FaArrowAltCircleUp  onClick={scrolUp} className='v12'/>
        )}
    </div>
  )
}

export default ScrollTop