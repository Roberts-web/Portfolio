import react from "react";
import './NavList.scss'
import robert from '../images/Robert.png'


const NavList = () => {
    return(

        <div>   
          <nav className='main-nav'>
            <ul className='main-list'>
              <li>Home</li>
              <li>About me</li>
            </ul>
            <img className='logo' src={robert} alt="logo" />
            

            <ul className='main-list'>
              <li>Projects</li>
              <li>Contacts</li>
            </ul>
            
          </nav>
        </div>
    )
}
export default NavList 