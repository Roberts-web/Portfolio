import { useState, useEffect } from 'react';
import react from "react";
import './BackToTop.scss'

const BackToTop = () => {

    const [visible, setVisible] = useState(false);

    const handleButtonVisiible = () => {
        window.scrollY > 300 ? setVisible(true) : setVisible(false)
        
    }

   window.addEventListener('scroll', handleButtonVisiible);
   

    const handleClick = () =>  {
        window.scrollTo({top: 0 , behavior: 'smooth' })
        

    }

    return(
        
            
                <div className= {visible ? 'scroll' : 'invisible'} onClick={handleClick} >
                     Up
                 </div>

            
        
    )
}

export default BackToTop;