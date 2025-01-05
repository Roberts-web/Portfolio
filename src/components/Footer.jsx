import react from 'react'
import './Footer.scss'
import robert from '../images/Robert.png'


const Footer = () => {
  return(

 
    <div className='footer' >
            <div className='footer-box' >
              email: ulicny.robert@gmail.com<br/>
              phone: 0919 406 612
            </div>
            <div className='footer-box' >
              designed by <img className='logo' src={robert} alt="robert" />

            </div>
            <div className='footer-box' >
              address: Bukurestska 26 <br/>
                        Kosice 04013

            </div>


    </div>
     )
}

export default Footer;