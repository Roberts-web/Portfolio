import react from 'react'
import photo from '../images/me.png'
import './Personals.scss'

const Personals = () => {
    return(
        <div>
          <div className='perfonal-info' >
            <div className='header-info-container' >
              <h2 >Robert Ulicny</h2>
              <p>Hello, my name is Robert Ulicny, nice to meet you<br/> I would like to welcome you
                with ma persolnal portfolio.
              </p>
            </div>
            <div className='photo-container'>
              <img className='photo' src={photo} alt="me" />
            </div>
          </div>
          

        </div>
    )
}

export default Personals